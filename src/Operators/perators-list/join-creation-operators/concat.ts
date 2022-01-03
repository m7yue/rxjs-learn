import { concat, interval, range } from 'rxjs';
import { take } from 'rxjs/operators';

export const concatOperator = () => {
  // const timer = interval(1000).pipe(take(4));
  // const sequence = range(7, 3);
  // const result = concat(timer, sequence);
  // result.subscribe(x => console.log(x));



  // const timer1 = interval(1000).pipe(take(3));
  // const timer2 = interval(2000).pipe(take(3));
  // const timer3 = interval(500).pipe(take(3));

  // // timer1 完了才会执行后续的
  // const result = concat(timer1, timer2, timer3);
  // result.subscribe(x => console.log(x));


  const timer = interval(1000).pipe(take(2));
  concat(timer, timer) // concatenating the same Observable!
  .subscribe({
    next: value => console.log(value),
    complete: () => console.log('...and it is done!'),
    error: err => {}
  });
}
