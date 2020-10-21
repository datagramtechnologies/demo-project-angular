import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from "rxjs/operators";
import { tap, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

    constructor(
       ) { }
    abortProcess(){
      alert("Maintenance block");
      

      return;
    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
            request = request.clone({
                // setHeaders: {
                //     'Access-Control-Allow-Origin': '*',
                //     'Access-Control-Allow-Headers': '*',
                // }
            });
        
        //this.totalRequests++;
        if(environment.maintenanceBlock==true){
          setTimeout(() => {
            this.abortProcess();
            
          }, 1500);
          return;
        }
        
        return next.handle(request).pipe(
            tap(res => {
              if (res instanceof HttpResponse) {
               
                }
            }),
            catchError(err => {
                throw err;
            })
        );
    }

}
