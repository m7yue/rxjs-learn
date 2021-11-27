import { throwError } from 'rxjs';

export const throwErrorOperators = () => {
  let errorCount = 0;
 
  const errorWithTimestamp$ = throwError(() => {
     const error: any = new Error(`This is error number ${++errorCount}`);
     error.timestamp = Date.now();
     return error;
  });
   
  errorWithTimestamp$.subscribe({
     error: err => console.log(err.timestamp, err.message)
  });
   
  errorWithTimestamp$.subscribe({
     error: err => console.log(err.timestamp, err.message)
  });
}