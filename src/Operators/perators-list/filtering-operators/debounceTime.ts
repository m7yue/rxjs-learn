import { fromEvent, interval } from 'rxjs';
import { scan, debounceTime } from 'rxjs/operators';

export const debounceTimeOperator = () => {
  const clicks = fromEvent(document, 'click');
  const result = clicks.pipe(
    scan((i) => ++i, 1),
    debounceTime(2000)
  );
  result.subscribe(x => console.log(x));
}
