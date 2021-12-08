import { fromEvent, of, timer } from 'rxjs';
import { mapTo, mergeScan, delay } from 'rxjs/operators';

// It's like scan, but the Observables returned by the accumulator are merged into the outer Observable.
export const mergeScanOperator = () => {
  const click$ = fromEvent(document, 'click');
  const one$ = click$.pipe(mapTo(1));
  const seed = 0;
  // Count the number of click events
  const count$ = one$.pipe(
    mergeScan(
      (acc, one) => {
        // return timer(1000).pipe( // time 1000 只是为了并发效果
        //   mapTo(acc + one)
        // )

        // 一样的效果
        return of(acc + one).pipe(
          delay(1000)
        )
      }, seed, 2),
  );
  count$.subscribe(x => console.log(x));
}