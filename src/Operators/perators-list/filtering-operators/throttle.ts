import { fromEvent, interval, timer } from 'rxjs';
import { throttle } from 'rxjs/operators';

export const throttleOperator = () => {
  const clicks = fromEvent(document, 'click');
  const result = clicks.pipe(
    throttle(
      // ev => interval(1000))
      ev => timer(1000))
    );
  result.subscribe(x => console.log(x));
}

// 先发出值，然后忽略特定时间内的后续值， audit是 忽略之前的值， 然后发出当前新值
