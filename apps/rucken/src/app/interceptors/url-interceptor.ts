import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class UrlInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (req.url.includes('/api') || req.url.includes('/host')) {
            let url = req.url;
            url = url.replace('/api', environment.api);
            url = url.replace('/host', `/${window.location.host}`);
            url = url.replace('http://', `${window.location.protocol}//`);
            const newReq = req.clone({
                url,
            });

            return next.handle(newReq);
        }

        return next.handle(req);
    }
}
