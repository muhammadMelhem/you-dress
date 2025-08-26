import {Injectable} from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {authConfig} from "./auth.config";
import {catchError, map, Observable, of} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private oauthService: OAuthService, private http: HttpClient) {
    // this.configure();
  }

  private configure(): void {
    this.oauthService.configure(authConfig);
    this.oauthService.setupAutomaticSilentRefresh();
  }

  async initLogin(): Promise<void> {
    await this.oauthService.loadDiscoveryDocumentAndTryLogin();
    if (!this.oauthService.hasValidAccessToken()) {
      await this.oauthService.loadDiscoveryDocumentAndLogin();
    }
  }


  get identityClaims() {
    return this.oauthService.getIdentityClaims();
  }

  get accessToken(): string {
    return this.oauthService.getAccessToken();
  }

  private navigateAfterLogin() {
    // this.router.navigate(['/crm']);

  }

  public initCodeFlow() {
    this.oauthService.initCodeFlow();
  }

  public redirectToLogin() {
    // this.router.navigate(['/authentication']);
  }

  public logout() {
    this.oauthService.logOut();
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
