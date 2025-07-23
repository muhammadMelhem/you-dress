import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class AuthGuard {
  constructor(
    private oauthService: OAuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isLoggedIn = this.oauthService.hasValidAccessToken();

    if (!isLoggedIn) {
      this.router.navigate(['/authentication/logout'], { queryParams: { returnUrl: state.url } });
    }

    return isLoggedIn;
  }
}
