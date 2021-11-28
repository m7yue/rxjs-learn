import { fromEvent, interval } from 'rxjs';
import { concatMapTo, take } from 'rxjs/operators';

// 基本和concatMap 一致了
export const concatMapToOperator = () => {
  const clicks = fromEvent(document, 'click');
  const result = clicks.pipe(
    concatMapTo(interval(1000).pipe(take(4)))
  );
  result.subscribe(x => console.log(x));
}
