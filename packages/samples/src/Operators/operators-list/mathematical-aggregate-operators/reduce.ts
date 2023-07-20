import { fromEvent, timer } from 'rxjs';
import { reduce, takeUntil, mapTo, take, map } from 'rxjs/operators';
 
export const reduceOperator = () => {
  const clicksInFiveSeconds = fromEvent(document, 'click')
    .pipe(
      takeUntil(timer(5000)), // 5s 内点击了多少次
    );
  const ones = clicksInFiveSeconds.pipe(mapTo(1));
  const seed = 0;
  // 和 scan 的内部实现类似，只不过 reduce是 emitBeforeComplete， scan 是 emitOnNext
  const count = ones.pipe(reduce((acc, one) => acc + one, seed));
  count.subscribe(x => console.log(x));
}
