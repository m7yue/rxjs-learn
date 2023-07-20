import { fromEvent } from 'rxjs';
import { first } from 'rxjs/operators';

export const firstOperator = () => {
  // const clicks = fromEvent(document, 'click');
  // const result = clicks.pipe(first());
  // result.subscribe(x => console.log(x));


  const clicks = fromEvent(document, 'click');
  const result = clicks.pipe(first((ev: any) => ev.target.tagName === 'DIV'));
  result.subscribe(x => console.log(x));
}
