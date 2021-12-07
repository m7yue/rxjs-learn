import { fromEvent, timer } from 'rxjs';
import { exhaustMap, take } from 'rxjs/operators';

export const exhaustMapOperator = () => {
  const clicks = fromEvent(document, 'click');

  // Run a finite timer for each click, only if there is no currently active timer
  // 多次点击， 只生效一次(第一次)， 类似于防抖
  const result = clicks.pipe(
    exhaustMap(ev => timer(0, 1000).pipe(take(5)))
  );
  result.subscribe(x => console.log(x));
}
