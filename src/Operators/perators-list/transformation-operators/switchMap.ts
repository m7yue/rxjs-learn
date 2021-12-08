import { of, EMPTY, interval, take, fromEvent } from 'rxjs';
import { switchMap, map, mergeMap } from 'rxjs/operators';

// Maps each value to an Observable, then flattens all of these inner Observables.
export const switchMapOperator = () => {
  // const switched = of(1, 2, 3)
  //   .pipe(switchMap((x: number) => of(x, x ** 2, x ** 3)));
  //   // .pipe(mergeMap((x: number) => of(x, x ** 2, x ** 3)));
  // switched.subscribe(x => console.log(x));
  
  // switchMap 会在下一个 observable 被送出后直接退订前一个未处理完的 observable
  const clicks = fromEvent(document, 'click');
  // 连续点击会中断之前的， mergeMap 每次都会执行
  const result = clicks.pipe(switchMap((ev) => interval(1000).pipe(take(3))));
  result.subscribe(x => console.log(x));
}