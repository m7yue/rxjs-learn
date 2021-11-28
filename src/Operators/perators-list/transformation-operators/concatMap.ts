import { fromEvent, interval } from 'rxjs';
import { concatMap, take, concatAll } from 'rxjs/operators';

// Maps each value to an Observable, then flattens all of these inner Observables using concatAll.
export const concatMapOperator = () => {
  const clicks = fromEvent(document, 'click');
  const result = clicks.pipe(
    concatMap(ev => interval(1000).pipe(take(4)))
  );
  result.subscribe(x => console.log(x));
}
