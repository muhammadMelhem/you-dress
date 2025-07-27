import {Injectable} from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {authConfig} from "./auth.config";
import {BehaviorSubject, catchError, filter, map, Observable, of} from "rxjs";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private isAuthenticatedSubject$ = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject$.asObservable();
  public redirectUrl: string | null = null;

  constructor(
    private oauthService: OAuthService,
    private router: Router, private http: HttpClient
  ) {
    this.configureOAuth();
  }

  private configureOAuth() {
    this.oauthService.configure(authConfig);

    this.oauthService.events.pipe(
      filter(e => e.type === 'token_received')
    ).subscribe(() => {
      this.isAuthenticatedSubject$.next(true);
      this.navigateAfterLogin();
    });

    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      const isAuthenticated = this.oauthService.hasValidAccessToken();
      this.isAuthenticatedSubject$.next(isAuthenticated);
      if (isAuthenticated) {
        this.navigateAfterLogin();
      }
    });
  }

  private navigateAfterLogin() {
    if (this.redirectUrl) {
      this.router.navigateByUrl(this.redirectUrl);
      this.redirectUrl = null;
    } else {
      this.router.navigate(['/crm']);
    }
  }

  public login() {
    this.oauthService.initCodeFlow();
  }

  public redirectToLogin() {
    this.router.navigate(['/authentication']);
  }

  public logout() {
    this.oauthService.logOut();
    this.isAuthenticatedSubject$.next(false);
  }

  public async handleCallback() {
    try {
      const isLoggedIn = await this.oauthService.loadDiscoveryDocumentAndTryLogin();
      this.isAuthenticatedSubject$.next(this.oauthService.hasValidAccessToken());

      if (isLoggedIn) {
        this.navigateAfterLogin();
      } else {
        this.login();
      }
    } catch {
      this.isAuthenticatedSubject$.next(false);
      this.router.navigate(['/authentication/logout']);
    }
  }

  public getAccessToken(): string {
    return this.oauthService.getAccessToken();
  }

  public getIdentityClaims(): any {
    return this.oauthService.getIdentityClaims();
  }

  introspectToken(token: string): Observable<boolean> {
    const url = 'http://localhost:8080/oauth2/introspect';

    const headers = new HttpHeaders({
      'Authorization': 'Basic Y2xpZW50OnNlY3JldA==',
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new HttpParams().set('token', token);

    return this.http.post<any>(url, body.toString(), {headers}).pipe(
      map(response => {
        return response.active === true;
      }),
      catchError(error => {
        console.error('Token introspection failed:', error);
        this.redirectToLogin();
        return of(false);
      })
    );
  }
}
