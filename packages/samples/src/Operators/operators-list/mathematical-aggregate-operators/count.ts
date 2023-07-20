import { fromEvent, interval, range } from 'rxjs';
import { count, map } from 'rxjs/operators';
import { takeUntil } from '../../../rxjs/src/operators/index';

export const countOperator = () => {
  // const seconds = interval(1000);
  // const clicks = fromEvent(document, 'click');
  // // @ts-ignore
  // const secondsBeforeClick = seconds.pipe(takeUntil(clicks));
  // const result = secondsBeforeClick.pipe(
  //   count()
  // );

  // result.subscribe({
  //   next: x => console.log(x),
  //   complete: () => console.log('complete'),
  // });


  // const numbers = range(1, 7);
  // const result = numbers.pipe(count(i => i % 2 === 1));
  // result.subscribe(x => console.log(x));
}
