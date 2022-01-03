import { EMPTY, fromEvent, interval } from 'rxjs';
import { defaultIfEmpty, takeUntil, scan, map } from 'rxjs/operators';


export const defaultIfEmptyOperator = () => {
  const clicks = fromEvent(document, 'click');
  const clicksBeforeFive = clicks.pipe(    
    takeUntil(interval(5000))
  );
  
  // If no clicks happen in 5 seconds, then emit "no clicks"
  const result = clicksBeforeFive.pipe(defaultIfEmpty('no clicks'));
  result.subscribe(x => console.log(x));
}
