import { fromEvent, interval, timer } from 'rxjs';
import { delayWhen, take, mapTo, mergeMap } from 'rxjs/operators';


export const delayWhenOperator = () => {
  const clicks = fromEvent(document, 'click');
  const delayedClicks = clicks.pipe(
    delayWhen(event => timer(1000)),
    // mergeMap((value, index) => interval(1000).pipe(take(1), mapTo(value)))
  );
  delayedClicks.subscribe(x => console.log(x));
}
