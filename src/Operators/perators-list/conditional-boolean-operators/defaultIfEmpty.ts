import { fromEvent, interval } from 'rxjs';
import { defaultIfEmpty, takeUntil } from 'rxjs/operators';


export const defaultIfEmptyOperator = () => {
  const clicks = fromEvent(document, 'click');
  const clicksBeforeFive = clicks.pipe(takeUntil(interval(3000)));
  
  // If no clicks happen in 3 seconds, then emit "no clicks"
  const result = clicksBeforeFive.pipe(defaultIfEmpty('no clicks'));
  result.subscribe(x => console.log(x));
}
