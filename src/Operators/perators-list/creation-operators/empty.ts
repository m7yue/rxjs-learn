import { EMPTY, interval, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

export const emptyDemo = () => {
  const interval$ = interval(1000);
  const result = interval$.pipe(
    mergeMap(x => x % 2 === 1 ? of(x) : EMPTY),
  );
  result.subscribe(x => console.log(x));
}


// const EMPTY = new Observable<never>((subscriber) => subscriber.complete());
