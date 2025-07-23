import {Injectable} from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {authConfig} from "./auth.config";
import {BehaviorSubject, filter} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private isAuthenticatedSubject$ = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject$.asObservable();
  public redirectUrl: string | null = null;

  constructor(
    private oauthService: OAuthService,
    private router: Router
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
      this.router.navigate(['/']);
    }
  }

  public login() {
    this.oauthService.initCodeFlow();
  }

  public logout() {
    this.oauthService.logOut();
    this.isAuthenticatedSubject$.next(false);
  }

  public async handleCallback() {
    await this.oauthService.loadDiscoveryDocumentAndLogin();
    this.isAuthenticatedSubject$.next(this.oauthService.hasValidAccessToken());
  }

  public getAccessToken(): string {
    return this.oauthService.getAccessToken();
  }

  public getIdentityClaims(): any {
    return this.oauthService.getIdentityClaims();
  }
}
