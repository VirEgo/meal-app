import { query } from '@angular/animations';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptorService implements HttpInterceptor {

  baseURL: string = "https://api.spoonacular.com";

  apiKey: string = 'c98497e19d054f579f29b13466b20935';


  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    req = req.clone({
      url: `${this.baseURL}${req.url}`,
      setParams: {
        apiKey: this.apiKey
      }

    });
    return next.handle(req);
  }
}
