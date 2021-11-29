import { fromEvent, interval, EMPTY } from 'rxjs';
import { window, mergeAll, map, buffer } from 'rxjs/operators';

// It's like buffer, but emits a nested Observable instead of an array.
export const windowOperator = () => {
  const clicks = fromEvent(document, 'click');
  const sec = interval(1000);

  // const result = clicks.pipe(
  //   window(sec),
  //   map(win => {
  //     return win.pipe(count())
  //   }),
  //   mergeAll(),
  // );

  const result = sec.pipe(
    window(clicks),
    map(win => {
      return win.pipe(
        buffer(EMPTY)
      )
    }),
    mergeAll(), // flatten the Observable-of-Observables
  );
  result.subscribe(x => console.log(x));
}
