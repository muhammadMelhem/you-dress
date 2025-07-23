import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {AuthorizationService} from "./authentication/authorization/authorization.service";
import {filter, Observable, take} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthorizationService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.authService.isAuthenticated$.pipe(
      filter(isAuthenticated => isAuthenticated !== null),
      take(1),
      map(isAuthenticated => {
        if (isAuthenticated) {
          return true;
        }

        // Store attempted URL for redirect after login
        this.authService.redirectUrl = state.url;
        this.authService.login();
        return false;
      })
    );
  }
}
