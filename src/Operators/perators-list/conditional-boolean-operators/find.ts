import { fromEvent } from 'rxjs';
import { find } from 'rxjs/operators';

export const findOperator = () => {
  const clicks = fromEvent(document, 'click');
  const result = clicks.pipe(find((ev: any) => ev.target.tagName === 'DIV'));
  result.subscribe(x => console.log(x));
}
