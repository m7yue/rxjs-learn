import { of } from 'rxjs';
import { take } from 'rxjs/operators';

export const ofOperators = () => {
  of(10, 20, 30)
  .subscribe(
    {
      next: (next) => console.log('next:', next),
      error: (err: any) => console.log('error:', err),
      complete: () => console.log('the end')
    }
  );

  of([10, 20, 30])
  .subscribe(
    {
      next: (next) => console.log('next:', next),
      error: (err: any) => console.log('error:', err),
      complete: () => console.log('the end')
    }
  );
}