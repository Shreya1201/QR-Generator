import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

export const authorizationInterceptor: HttpInterceptorFn = (req, next) => {
    const authService = inject(AuthService);
    const token = authService.getToken();
    if(token){
      const authReq = req.clone({
        setHeaders:{
          Authorization: `Bearer ${token}`
        }
      })
      return next(authReq);
    }
  return next(req);
};
