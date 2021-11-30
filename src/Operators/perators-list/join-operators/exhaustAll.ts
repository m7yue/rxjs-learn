import { fromEvent, interval } from 'rxjs';
import { exhaustAll, map, take } from 'rxjs/operators';


export const exhaustAllOperator = () => {
  const clicks = fromEvent(document, 'click');

  // 如果先前的 Observable 尚未完成，则 忽略每个新的内部 Observable。
  const higherOrder = clicks.pipe(
    map((ev) => interval(1000).pipe(take(5))),
  );
  const result = higherOrder.pipe(exhaustAll());
  result.subscribe(x => console.log(x));
}
