import { fromEvent, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export const takeUtilOperator = () => {
  const source = interval(1000);
  const clicks = fromEvent(document, 'click');
  // Tick every second until the first click happens
  const result = source.pipe(takeUntil(clicks));
  result.subscribe(x => console.log(x));
}
