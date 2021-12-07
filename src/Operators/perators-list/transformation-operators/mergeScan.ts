import { fromEvent, of } from 'rxjs';
import { mapTo, mergeScan } from 'rxjs/operators';

// It's like scan, but the Observables returned by the accumulator are merged into the outer Observable.
export const mergeScanOperator = () => {
  const click$ = fromEvent(document, 'click');
  const one$ = click$.pipe(mapTo(1));
  const seed = 0;
  // Count the number of click events
  const count$ = one$.pipe(
    mergeScan((acc, one) => of(acc + one), seed),
  );
  count$.subscribe(x => console.log(x));
}