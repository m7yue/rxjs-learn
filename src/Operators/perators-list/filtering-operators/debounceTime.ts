import { fromEvent, interval } from 'rxjs';
import { scan, debounceTime } from 'rxjs/operators';

export const debounceTimeOperator = () => {
  const clicks = fromEvent(document, 'click');
  const result = clicks.pipe(
    debounceTime(500),
    scan((i) => ++i, 1),
  );
  result.subscribe(x => console.log(x));
}
