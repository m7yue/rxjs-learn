import { fromEvent, interval, range } from 'rxjs';
import { count, takeUntil } from 'rxjs/operators';

export const countOperator = () => {
  const seconds = interval(1000);
  const clicks = fromEvent(document, 'click');
  const secondsBeforeClick = seconds.pipe(takeUntil(clicks));
  const result = secondsBeforeClick.pipe(count());

  result.subscribe(x => console.log(x));


  // const numbers = range(1, 7);
  // const result = numbers.pipe(count(i => i % 2 === 1));
  // result.subscribe(x => console.log(x));
}
