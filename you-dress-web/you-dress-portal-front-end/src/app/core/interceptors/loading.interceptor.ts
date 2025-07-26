import {HttpContextToken, HttpHandlerFn, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import { LoadingService } from '../services/loading/loading.service';
import { inject } from '@angular/core';
import {finalize} from "rxjs";

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
