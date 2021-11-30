import { fromEvent, interval } from 'rxjs';
import { map, take, concatAll } from 'rxjs/operators';

export const concatAllOperator = () => {
  const clicks = fromEvent(document, 'click');

  // 将高阶 Observable 转换为的一阶 Observable 将内部的 Observable 依次排列。
  const higherOrder = clicks.pipe(
    map(ev => interval(1000).pipe(take(4))),
  );
  const firstOrder = higherOrder.pipe(concatAll());
  firstOrder.subscribe(x => console.log(x));
}