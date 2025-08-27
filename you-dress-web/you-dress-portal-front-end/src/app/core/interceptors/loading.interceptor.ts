import {HttpContextToken, HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import { LoadingService } from '../services/loading/loading.service';
import { inject } from '@angular/core';
import {finalize, Observable} from "rxjs";
import {environment} from "../../../environment";

export const SkipLoading = new HttpContextToken<boolean>(() => false);

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  if (req.context.get(SkipLoading)) {
    return next(req);
  }

  loadingService.loadingOn();

  return next(req).pipe(
    finalize(() => loadingService.loadingOff())
  );
};


export function withCredentialsInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  request = request.clone({
    url: environment.backendBaseUrl + request.url,
    withCredentials: true   // This is required to ensure the Session Cookie is passed in every request to the Backend
  });
  return next(request);
}
