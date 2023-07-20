import { fromEvent, interval, timer } from 'rxjs';
import { delayWhen, take, mapTo, mergeMap } from 'rxjs/operators';


export const delayWhenOperator = () => {
  const clicks = fromEvent(document, 'click');
  const delayedClicks = clicks.pipe(
    // delayWhen(event => interval(1000)),
    // mergeMap((value, index) => interval(1000).pipe(take(1), mapTo(value)))
    mergeMap((value, index) => timer(1000).pipe(mapTo(value)))
  );
  delayedClicks.subscribe(x => console.log(x));
}
