import { fromEvent, interval } from 'rxjs';
import { switchMapTo, take } from 'rxjs/operators';

// It's like switchMap, but maps each value always to the same inner Observable.
export const switchMapToOperator = () => {
  const clicks = fromEvent(document, 'click');
  // 连续点击会中断之前的， mergeMap 每次都会执行
  const result = clicks.pipe(switchMapTo(interval(1000).pipe(take(3))));
  result.subscribe(x => console.log(x));
}