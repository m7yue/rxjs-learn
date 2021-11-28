import { fromEvent } from 'rxjs';
import { windowTime, map, mergeAll, take } from 'rxjs/operators';

export const windowTimeOperator = () => {
  // const clicks = fromEvent(document, 'click');
  // const result = clicks.pipe(
  //   windowTime(1000),
  //   map(win => win.pipe(take(2))), // each window has at most 2 emissions
  //   mergeAll(),                    // flatten the Observable-of-Observables
  // );
  // result.subscribe(x => console.log(x));

  // const clicks = fromEvent(document, 'click');
  // const result = clicks.pipe(
  //   windowTime(1000, 5000),
  //   map(win => win.pipe(take(2))), // each window has at most 2 emissions
  //   mergeAll(),                    // flatten the Observable-of-Observables
  // );
  // result.subscribe(x => console.log(x));

  const clicks = fromEvent(document, 'click');
  const result = clicks.pipe(
    windowTime(1000, 5000, 2), // each window has still at most 2 emissions
    mergeAll(),                // flatten the Observable-of-Observables
  );
  result.subscribe(x => console.log(x));
}
