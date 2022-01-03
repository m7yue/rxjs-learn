import { of } from 'rxjs';
import { map, catchError, take } from 'rxjs/operators';

export const catchErrorOperator = () => {
  // of(1, 2, 3, 4, 5).pipe(
  //   map(n => {
  // 	   if (n === 4) {
	//        throw 'four!';
  //     }
  //    return n;
  //   }),
  //   // Continues with a different Observable when there's an error
  //   catchError(err => of('I', 'II', 'III', 'IV', 'V')),
  // )
  // .subscribe(x => console.log(x));


  // of(1, 2, 3, 4, 5).pipe(
  //   map(n => {
  // 	   if (n === 4) {
  // 	     throw 'four!';
  //     }
	//      return n;
  //   }),
  //   // Retries the caught source Observable again in case of error, similar to retry() operator
  //   catchError((err, caught) => caught),
  //   take(10),
  // )
  // .subscribe(x => console.log(x));


  of(1, 2, 3, 4, 5).pipe(
    map(n => {
      if (n === 4) {
        throw 'four!';
      }
      return n;
    }),
    // Throws a new error when the source Observable throws an error
    catchError(err => {
      throw 'error in source. Details: ' + err;
    }),
  )
  .subscribe(
    {
      next: x => console.log(x),
      error: err => console.log(err)
    }
  );
}
