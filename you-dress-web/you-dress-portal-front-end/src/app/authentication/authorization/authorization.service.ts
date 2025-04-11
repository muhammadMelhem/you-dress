import { Injectable } from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {authConfig} from "./auth.config";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private oauthService: OAuthService) {
    this.configureOAuth();

  }

  private async configureOAuth() {
    this.oauthService.configure(authConfig);
    await this.oauthService.loadDiscoveryDocument();
    await this.oauthService.tryLoginCodeFlow();
  }


  refresh(): void {
    this.oauthService.refreshToken();
  }

  logout(): void {
    this.oauthService.revokeTokenAndLogout({
      client_id: this.oauthService.clientId,
      returnTo: this.oauthService.redirectUri
    }, true);
  }

  login(): void {

    this.oauthService.initCodeFlow();

  }

  accessTokens(): void {

    this.oauthService.getAccessToken();

  }

  //
  // get accessToken() {
  //   return this.oauthService.getAccessToken();
  // }

  get refreshToken() {
    return this.oauthService.getRefreshToken();
  }

  get idToken() {
    return this.oauthService.getIdToken();
  }
}
