import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { retryWhen } from "rxjs/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {
       //  debugger;
        console.log(req.headers)
        if (localStorage.getItem('token')) {
            const jwt = JSON.parse(localStorage.getItem('token')!)
            const token = jwt.token

            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                    "Bearer " + token)
            });

             return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    }
}