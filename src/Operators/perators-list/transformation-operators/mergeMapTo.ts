import { fromEvent, interval, of } from 'rxjs';
import { mergeMapTo, take, map } from 'rxjs/operators';

// It's like mergeMap, but maps each value always to the same inner Observable.
export const mergeMapToOperator = () => {
  const letters = of('a', 'b', 'c');
  const clicks = fromEvent(document, 'click');
  const result = clicks.pipe(
    mergeMapTo(interval(1000).pipe(take(3), map(i => i))));
  result.subscribe(x => console.log(x));
}