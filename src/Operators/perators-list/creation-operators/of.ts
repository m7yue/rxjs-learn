import { of, asyncScheduler } from 'rxjs';
import { take } from 'rxjs/operators';

export const ofOperator = () => {
  console.log('start')
  of(10, 20, 30)
  // of(10, 20, 30, asyncScheduler) // 内部还是用 from 实现
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