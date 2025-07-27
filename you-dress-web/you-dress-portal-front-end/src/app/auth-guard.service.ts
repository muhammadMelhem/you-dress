import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable, of} from "rxjs";
import {switchMap} from "rxjs/operators";
import {AuthorizationService} from "./authentication/authorization/authorization.service";
import {OAuthService} from "angular-oauth2-oidc";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthorizationService,
    private oauthService: OAuthService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    this.oauthService.restartSessionChecksIfStillLoggedIn();

    const token = this.oauthService.getAccessToken();

    if (!token) {
      this.authService.handleCallback();
      return of(false);
    }

    return this.authService.introspectToken(token).pipe(
      switchMap(isValid => {
        if (isValid) {
          return of(true);
        } else {
          this.authService.handleCallback();
          return of(false);
        }
      })
    );
  }
}
