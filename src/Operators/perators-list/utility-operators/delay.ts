import { fromEvent } from 'rxjs';
import { delay } from 'rxjs/operators';


export const delayOperator = () => {
  // const clicks = fromEvent(document, 'click');
  // const delayedClicks = clicks.pipe(delay(1000)); // each click emitted after 1 second
  // delayedClicks.subscribe(x => console.log(x));

  const clicks = fromEvent(document, 'click');
  const now = +new Date()
  const next10Seconds = now + 10000
  const date = new Date(next10Seconds); // in the future
  const delayedClicks = clicks.pipe(delay(date)); // click emitted only after that date
  delayedClicks.subscribe(x => console.log(x));
}
