import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = localStorage.getItem('authData');

    let req = request;

    if (['DELETE', 'PUT', 'POST'].includes(request.method)) {

      if(request.url.includes('/login')){
        return next.handle(request);
      }

      req = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      
      return next.handle(req);
    }

    // Continuar con el manejo de la solicitud
    return next.handle(request);
  }
}
