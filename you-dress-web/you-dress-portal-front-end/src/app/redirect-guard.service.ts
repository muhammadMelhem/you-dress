import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {AuthorizationService} from "./authentication/authorization/authorization.service";
import {filter, Observable, take} from "rxjs";
import {map} from "rxjs/operators";
import {OAuthService} from "angular-oauth2-oidc";

@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanActivate {
  constructor(private oauthService: OAuthService, private router: Router) {}

  canActivate(): UrlTree {
    if (this.oauthService.hasValidAccessToken()) {
      return this.router.parseUrl('/crm');
    } else {
      return this.router.parseUrl('/authentication/logout');
    }
  }
}
