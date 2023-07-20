import { EMPTY, fromEvent, timer } from 'rxjs';
import { defaultIfEmpty, takeUntil, scan, map } from 'rxjs/operators';

// 如果源 Observable 完成而不发出任何值，则发出给定值
export const defaultIfEmptyOperator = () => {
  const clicks = fromEvent(document, 'click');
  const clicksBeforeFive = clicks.pipe(    
    takeUntil(timer(5000))
  );
  
  // If no clicks happen in 5 seconds, then emit "no clicks"
  const result = clicksBeforeFive.pipe(defaultIfEmpty('no clicks'));
  result.subscribe(x => console.log(x));
}
