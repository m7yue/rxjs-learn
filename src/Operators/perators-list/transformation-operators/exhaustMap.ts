import { fromEvent, interval } from 'rxjs';
import { exhaustMap, take } from 'rxjs/operators';

export const exhaustMapOperator = () => {
  const clicks = fromEvent(document, 'click');

  // Run a finite timer for each click, only if there is no currently active timer
  // 多次点击， 只生效一次， 类似于防抖
  const result = clicks.pipe(
    exhaustMap(ev => interval(1000).pipe(take(5)))
  );
  result.subscribe(x => console.log(x));
}
