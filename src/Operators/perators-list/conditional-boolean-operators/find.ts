import { fromEvent } from 'rxjs';
import { find } from 'rxjs/operators';

export const findOperator = () => {
  const clicks = fromEvent(document, 'click');

  // 只要找到一个就直接 complete
  const result = clicks.pipe(find((ev: any) => ev.target.tagName === 'DIV'));
  result.subscribe(x => console.log(x));
}
