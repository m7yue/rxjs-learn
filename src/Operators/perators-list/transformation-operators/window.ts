import { fromEvent, interval } from 'rxjs';
import { window, mergeAll, map, take } from 'rxjs/operators';

// It's like buffer, but emits a nested Observable instead of an array.
export const windowOperator = () => {
  const clicks = fromEvent(document, 'click');
  const sec = interval(1000);
  const result = clicks.pipe(
    window(sec),
    map(win => {
      return win.pipe(take(2))
    }), // each window has at most 2 emissions
    mergeAll(), // flatten the Observable-of-Observables
  );
  result.subscribe(x => console.log(x));
}
