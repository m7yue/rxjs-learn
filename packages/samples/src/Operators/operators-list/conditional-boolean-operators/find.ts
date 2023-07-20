import { fromEvent, timer } from 'rxjs';
import { find, takeUntil } from 'rxjs/operators';

export const findOperator = () => {
  const clicks = fromEvent(document, 'click')
    .pipe(
      takeUntil(timer(5000))
    )
  ;

  // 只要找到一个就直接 complete, 找不到返回 undefined
  const result = clicks.pipe(
    find((ev: any) => ev.target.tagName === 'DIV')
  );
  result.subscribe(x => console.log(x));
}
