import { fromEvent } from 'rxjs';
import { elementAt } from 'rxjs/operators';

export const elementAtOperator = () => {
  const clicks = fromEvent(document, 'click');
  // Emit only the third click event
  const result = clicks.pipe(elementAt(2));
  result.subscribe((x: any) => console.log(x.clientX));
}