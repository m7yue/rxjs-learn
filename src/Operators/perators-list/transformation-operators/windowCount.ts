import { fromEvent } from 'rxjs';
import { windowCount, map, mergeAll, skip } from 'rxjs/operators';

// It's like bufferCount, but emits a nested Observable instead of an array.
export const windowCountOperator = () => {
  // const clicks = fromEvent(document, 'click');
  // const result = clicks.pipe(
  //   windowCount(3),
  //   map(win => win.pipe(skip(1))), // skip first of every 3 clicks
  //   mergeAll()                     // flatten the Observable-of-Observables
  // );
  // result.subscribe(x => console.log(x));

  const clicks = fromEvent(document, 'click');
  const result = clicks.pipe(
    windowCount(2, 3),
    mergeAll(),              // flatten the Observable-of-Observables
  );
  result.subscribe(x => console.log(x));
}
