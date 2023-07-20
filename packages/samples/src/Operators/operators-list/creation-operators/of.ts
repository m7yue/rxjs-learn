import { of, asyncScheduler, asapScheduler, queueScheduler } from 'rxjs';
import { take, observeOn } from 'rxjs/operators';

export const ofOperator = () => {
  console.log('start')
  of(10, 20, 30)
  // .pipe(
  //   observeOn(asapScheduler)
  // )
  .subscribe(
    {
      next: (next) => console.log('next:', next),
      error: (err: any) => console.log('error:', err),
      complete: () => console.log('the end')
    }
  );
  console.log('end')

  // of([10, 20, 30])
  // .subscribe(
  //   {
  //     next: (next) => console.log('next:', next),
  //     error: (err: any) => console.log('error:', err),
  //     complete: () => console.log('the end')
  //   }
  // );
}