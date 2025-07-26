import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideOAuthClient} from "angular-oauth2-oidc";
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {loadingInterceptor} from "./core/interceptors/loading.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideOAuthClient(),
    provideHttpClient(
      withInterceptors([loadingInterceptor])
    )
  ]
};
