import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable, of} from "rxjs";
import {AuthorizationService} from "./authentication/authorization/authorization.service";
import {OAuthService} from "angular-oauth2-oidc";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthorizationService,
    private oauthService: OAuthService,
    private router: Router,
    private http: HttpClient
  ) {
  }

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

    this.authService.introspectToken(token).subscribe(isValid => {
      if (!isValid) {
        // Already redirected in service, but can add fallback here if needed
        return of(false);
      } else {
        this.authService.redirectToLogin();
        return of(true);
      }
    });

    return of(false);
  }
}
