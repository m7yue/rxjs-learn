import { fromEvent, of } from 'rxjs';
import { expand, mapTo, delay, take } from 'rxjs/operators';

// It's similar to mergeMap, but applies the projection function
// to every source value as well as every output value. It's recursive(递归的).
export const expandOperator = () => {
  const clicks = fromEvent(document, 'click');
  const powersOfTwo = clicks.pipe(
    mapTo(1),
    expand(x => of(2 * x).pipe(delay(1000))),
    take(10),
  );
  powersOfTwo.subscribe(x => console.log(x));
}
