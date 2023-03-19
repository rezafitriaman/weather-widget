import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let newParams = new HttpParams({fromString: request.params.toString()});
    newParams = newParams.set('appid', 'd8c1aa5be946a27019e8162f742ed5c2');
    console.log('intercept data');
    const requestClone = request.clone({
      params: newParams
    });
    return next.handle(requestClone);
  }
}
