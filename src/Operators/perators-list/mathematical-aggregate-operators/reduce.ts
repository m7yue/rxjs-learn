import { fromEvent, interval } from 'rxjs';
import { reduce, takeUntil, mapTo, take, map } from 'rxjs/operators';
 
export const reduceOperator = () => {
  const clicksInFiveSeconds = fromEvent(document, 'click')
    .pipe(
      takeUntil(interval(5000)), // 5s 内点击了多少次
    );
  const ones = clicksInFiveSeconds.pipe(mapTo(1));
  const seed = 0;
  const count = ones.pipe(
    reduce((acc, one) => {
      return acc + one
    }, seed),
  );
  count.subscribe(x => console.log(x));
}
