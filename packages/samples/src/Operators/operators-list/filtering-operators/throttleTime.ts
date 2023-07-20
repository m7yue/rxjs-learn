import { fromEvent, interval } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

export const throttleTimeOperator = () => {
  const clicks = fromEvent(document, 'click');
  const result = clicks.pipe(throttleTime(1000));
  result.subscribe(x => console.log(x));
}