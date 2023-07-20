import { interval, throwError, timer } from 'rxjs';
import { timeout, expand } from 'rxjs/operators';

class CustomTimeoutError extends Error {
  constructor() {
     super('It was too slow');
     this.name = 'CustomTimeoutError';
  }
}

// 如果 Observable 在给定的时间范围内未发出值，则发生错误。
export const timeoutOperator = () => {
  const seconds = interval(1000);

  // seconds.pipe(timeout(1100))
  // .subscribe(
  //   {
  //     next: value => console.log(value),
  //     error: err => console.log(err),
  //   }
  // );

  // Emit a custom error if there is too much time between values
  // seconds.pipe(timeout(900))
  // .subscribe(
  //   {
  //     next: value => console.log(value),
  //     error: err => console.log(err),
  //   }
  // );

  // Switch to a faster observable if your source is slow.
  // const slow$ = interval(900);
  // const fast$ = interval(500);
  
  // slow$.pipe(
  //   timeout({
  //     each: 899,
  //     with: () => fast$,
  //   })
  // )
  // .subscribe(console.log)


  // ============== Handling TimeoutErrors ===============

  // Emit a TimeoutError if the first value, does not arrive within 3 seconds
  // 只关注第一个
  // const source$ = interval(4000);

  // source$.pipe(
  //   timeout({ first: 3000 })
  // )
  // .subscribe(console.log);


  // const getRandomTime = () => Math.round(Math.random() * 5000);
 
  // const source$ = timer(getRandomTime()).pipe(
  //   expand(() => timer(getRandomTime()))
  // )
  
  // source$.pipe(
  //   timeout({ each: 5000 })
  // )
  // .subscribe(console.log);


  // const getRandomTime = () => Math.round(4001);

  // const source$ = timer(getRandomTime()).pipe(
  //   expand(() => timer(getRandomTime()))
  // )

  // source$.pipe(
  //   timeout({ first: 4000, each: 3000 })
  // )
  // .subscribe(console.log);
}