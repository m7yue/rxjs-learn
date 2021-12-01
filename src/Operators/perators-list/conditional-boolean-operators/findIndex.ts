import { fromEvent } from 'rxjs';
import { findIndex } from 'rxjs/operators';


export const findIndexOperator = () => {
  const clicks = fromEvent(document, 'click');
  const result = clicks.pipe(findIndex((ev: any) => ev.target.tagName === 'DIV'));
  result.subscribe(x => console.log(x));
}
