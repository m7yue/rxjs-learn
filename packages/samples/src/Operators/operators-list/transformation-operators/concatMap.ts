import { fromEvent, interval } from 'rxjs';
import { concatMap, take, concatAll } from 'rxjs/operators';

// Maps each value to an Observable, then flattens all of these inner Observables using concatAll.
export const concatMapOperator = () => {
  const clicks = fromEvent(document, 'click');

  // 连续点击多次是 同步执行的： mergeMap 并发数设为 1
  const result = clicks.pipe(
    concatMap(ev => interval(1000).pipe(take(4)))
  );
  result.subscribe(x => console.log(x));
}
