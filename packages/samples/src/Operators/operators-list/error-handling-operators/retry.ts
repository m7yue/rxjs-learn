import { interval, of, throwError } from 'rxjs';
import { mergeMap, map, retry } from 'rxjs/operators';


export const retryOperator = () => {
  const source = interval(1000);
  const example = source.pipe(
    map(n => {
  	   if (n === 5) {
  	     throw 'four!';
      }
	     return n;
    }),
    retry(2)
    // ======= or ===========
    // mergeMap(val => {
    //   if(val > 5){
    //     return throwError('Error!');
    //   }
    //   return of(val);
    // }),
    //retry 2 times on error
    // retry(2)
  );
  const subscribe = example.subscribe({
    next: val => console.log(val),
    error: val => console.log(`${val}: Retried 2 times then quit!`)
  });
}

