import { EMPTY, interval, of, startWith } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

export const emptyDemo = () => {
  EMPTY.subscribe({
    next: () => console.log('Next'),
    complete: () => console.log('Complete!')
  });

  const result1 = EMPTY.pipe(startWith(7));
  result1.subscribe(x => console.log(x));

  const interval$ = interval(1000);
  const result = interval$.pipe(
    mergeMap(x => x % 2 === 1 ? of(x) : EMPTY),
  );
  result.subscribe(x => console.log(x));
}


// const EMPTY = new Observable<never>((subscriber) => subscriber.complete());

// just completes, without emitting values
// 一个只发出完成通知的简单 Observable， 可用于与其他观察对象组合