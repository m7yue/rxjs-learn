import { throwError } from 'rxjs';

export const throwErrorOperator = () => {
  let errorCount = 0;
 
  const errorWithTimestamp$ = throwError(
     // 回调是在 subscriber.error 时执行的
     () => {
         const error: any = new Error(`This is error number ${++errorCount}`);
         error.timestamp = Date.now();
         return error;
      }
  );
   
  errorWithTimestamp$.subscribe({
     error: err => console.log(err.timestamp, err.message)
  });
   
  errorWithTimestamp$.subscribe({
     error: err => console.log(err.timestamp, err.message)
  });


   //   subscriber.error(cb)
}