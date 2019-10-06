import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StatusService } from './status.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private statusService: StatusService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            console.log('something went wrong');
            const error = 'Oops something went wrong contacting the server [' + err.statusText + ']';
            this.statusService.message.emit(error);
            return throwError(error);
        }));
    }
}