import { fromEvent, interval } from 'rxjs';
import { windowWhen, map, mergeAll, take } from 'rxjs/operators';

export const windowWhenOperator = () => {
  const clicks = fromEvent(document, 'click');
  const result = clicks.pipe(
    windowWhen(() => interval(1000 + Math.random() * 4000)),
    map(win => win.pipe(take(2))),     // each window has at most 2 emissions
    mergeAll()                         // flatten the Observable-of-Observables
  );
  result.subscribe(x => console.log(x));
}
