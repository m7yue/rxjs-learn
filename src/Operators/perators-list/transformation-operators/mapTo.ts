import { fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators';

// Like map, but it maps every source value to the same output value every time.
export const mapToOperator = () => {
  const clicks = fromEvent(document, 'click');
  const greetings = clicks.pipe(mapTo('Hi'));
  greetings.subscribe(x => console.log(x));
}