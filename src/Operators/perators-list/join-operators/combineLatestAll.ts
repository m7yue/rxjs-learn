import { fromEvent, interval } from 'rxjs';
import { map, combineLatestAll, take } from 'rxjs/operators';

export const combineLatestAllOperator = () => {
  const clicks = fromEvent(document, 'click');
  const higherOrder = clicks.pipe(
    map(ev =>
       interval(1000).pipe(take(3))
    ),
    take(2)
  );
  const result = higherOrder.pipe(
    combineLatestAll()
  );
  
  result.subscribe(x => console.log(x));
}
