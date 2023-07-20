import { of, interval, take, EMPTY } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

// Maps each value to an Observable, then flattens all of these inner Observables using mergeAll.
export const mergeMapOperator = () => {
  const letters = of('a', 'b', 'c');
  const result = letters.pipe(
    mergeMap(x => x !== 'a' 
      ? interval(1000).pipe(take(3), map(i => x+i))
      : EMPTY
    , 1), // concurrent=Infinit 默认并发数为 无穷大
  );
  result.subscribe(x => console.log(x));
}