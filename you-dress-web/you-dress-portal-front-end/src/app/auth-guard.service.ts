import {inject, Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate, CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthorizationService } from './authentication/authorization/authorization.service';
import { OAuthService } from 'angular-oauth2-oidc';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(
//     private authService: AuthorizationService,
//     private oauthService: OAuthService,
//     private router: Router
//   ) {}
//
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     const token = this.oauthService.getAccessToken();
//
//     if (!token || !this.oauthService.hasValidAccessToken()) {
//       // Redirect to login flow
//       this.oauthService.initLoginFlow(state.url);
//       return false;
//     }
//
//     // Optional: Use token introspection for backend validation
//     return this.authService.introspectToken(token).pipe(
//       switchMap((isValid: boolean) => {
//         if (isValid) {
//           return of(true);
//         } else {
//           this.oauthService.initLoginFlow(state.url);
//           return of(false);
//         }
//       })
//     );
//   }

export const AuthGuard: CanActivateFn = () => {
  // const oauth = inject(OAuthService);
  // const router = inject(Router);
  //
  // if (oauth.hasValidAccessToken()) {
  //   return true;
  // }
  // oauth.initLoginFlow();
  // return false;

  return true;
};

