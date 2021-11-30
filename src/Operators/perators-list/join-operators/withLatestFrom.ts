import { fromEvent, interval } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';

export const withLatestFromOperator = () => {
  const clicks = fromEvent(document, 'click');
  const timer = interval(1000);

  const result = clicks.pipe(
    withLatestFrom(timer)
  );
  result.subscribe(x => console.log(x));
}
