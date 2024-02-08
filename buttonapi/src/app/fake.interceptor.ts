import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const fakeInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req)
  .pipe(
    catchError((err) => {
      if([404].includes(err.status)){
        // console.log(`${err.error}`);
        
      }
      const e = err.error
      return throwError(() => console.log(e))
  })
  )
  
};


