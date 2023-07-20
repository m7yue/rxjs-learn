import { fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';

export const filterOperator = () => {
  const clicks = fromEvent(document, 'click');
  // Emit only click events whose target was a DIV element
  const clicksOnDivs = clicks.pipe(filter((ev: any) => ev.target.tagName === 'DIV'));
  clicksOnDivs.subscribe(x => console.log(x));
}
