import { fromEvent, timer } from 'rxjs';
import { findIndex, takeUntil } from 'rxjs/operators';


export const findIndexOperator = () => {
  const clicks = fromEvent(document, 'click')
    .pipe(
      takeUntil(timer(5000))
    )
  ;
  // 只要找到一个就直接 complete, 找不到返回 -1
  const result = clicks.pipe(findIndex((ev: any) => ev.target.tagName === 'DIV'));
  result.subscribe(x => console.log(x));
}
