import { concat, interval, range } from 'rxjs';
import { take } from 'rxjs/operators';

export const concatOperator = () => {
  // const timer = interval(1000).pipe(take(4));
  // const sequence = range(1, 10);
  // const result = concat(timer, sequence);
  // result.subscribe(x => console.log(x));



  // const timer1 = interval(1000).pipe(take(10));
  // const timer2 = interval(2000).pipe(take(6));
  // const timer3 = interval(500).pipe(take(10));

  // const result = concat(timer1, timer2, timer3);
  // result.subscribe(x => console.log(x));


  const timer = interval(1000).pipe(take(2));
  concat(timer, timer) // concatenating the same Observable!
  .subscribe(
    value => console.log(value),
    err => {},
    () => console.log('...and it is done!')
  );
}
