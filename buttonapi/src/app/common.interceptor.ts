import { HttpInterceptorFn } from '@angular/common/http';

export const commonInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`Requesting on ${req.url}`);
  // const authToken = this.auth.getAuthorizationToken();
  const authReq = req.clone({
    headers:req.headers.set('Authorization','random')
  })
  return next(authReq);
};
