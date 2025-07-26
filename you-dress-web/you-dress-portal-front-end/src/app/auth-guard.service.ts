import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import {delay, Observable, of} from "rxjs";
import { switchMap, map } from "rxjs/operators";
import { AuthorizationService } from "./authentication/authorization/authorization.service";
import { OAuthService } from "angular-oauth2-oidc";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthorizationService,
    private oauthService: OAuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    this.oauthService.restartSessionChecksIfStillLoggedIn();

    const token = this.oauthService.getAccessToken();

    if (!token) {
      this.authService.redirectToLogin();
      return of(false);
    }

    return this.authService.introspectToken(token).pipe(
      delay(5000),
      switchMap(isValid => {
        if (isValid) {
          return of(true);
        } else {
          this.authService.redirectToLogin();
          return of(false);
        }
      })
    );
  }
}
