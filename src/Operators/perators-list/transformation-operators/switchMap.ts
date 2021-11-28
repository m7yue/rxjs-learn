import { of, EMPTY, interval, take } from 'rxjs';
import { switchMap, map, mergeMap } from 'rxjs/operators';

// Maps each value to an Observable, then flattens all of these inner Observables.
export const switchMapOperator = () => {
  const switched = of(1, 2, 3)
    .pipe(switchMap((x: number) => of(x, x ** 2, x ** 3)));
    // .pipe(mergeMap((x: number) => of(x, x ** 2, x ** 3))); // 区别是什么呢
  switched.subscribe(x => console.log(x));
  

  const letters = of('a', 'b', 'c');
  const result = letters.pipe(
    switchMap(x => x !== 'a' 
      ? interval(1000).pipe(take(3), map(i => x+i))
      : EMPTY
    ),
  );
  result.subscribe(x => console.log(x));
}