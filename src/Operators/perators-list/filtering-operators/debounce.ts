import { fromEvent, interval } from 'rxjs';
import { scan, debounce } from 'rxjs/operators';

export const debounceOperator = () => {
  const clicks = fromEvent(document, 'click');
  const result = clicks.pipe(
    scan((i) => ++i, 1),
    debounce((i) => interval(2000))
  );
  result.subscribe(x => console.log(x));
}
