import {bootstrapApplication} from '@angular/platform-browser';
import {appConfig} from './app/app.config';
import {AppComponent} from './app/app.component';
import {OAuthService} from "angular-oauth2-oidc";
import {authConfig} from "./app/authentication/authorization/auth.config";

async function initApp(oauthService: OAuthService): Promise<void> {
  oauthService.configure(authConfig);
  oauthService.setupAutomaticSilentRefresh();
  await oauthService.loadDiscoveryDocumentAndTryLogin();
}

bootstrapApplication(AppComponent, appConfig).then(appRef => {
  const oauthService = appRef.injector.get(OAuthService);
  return initApp(oauthService);
}).catch(err => console.error(err));
