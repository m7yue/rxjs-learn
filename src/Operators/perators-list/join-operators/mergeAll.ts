import { fromEvent, interval } from 'rxjs';
import { take, map, mergeAll } from 'rxjs/operators';

export const mergeAllOperator = () => {
  // const clicks = fromEvent(document, 'click');
  // const higherOrder = clicks.pipe(map((ev) => interval(1000)));
  // const firstOrder = higherOrder.pipe(mergeAll());
  // firstOrder.subscribe(x => console.log(x));


  const clicks = fromEvent(document, 'click');
  const higherOrder = clicks.pipe(
    map((ev) => interval(1000).pipe(take(10))),
  );
  const firstOrder = higherOrder.pipe(mergeAll(2));
  firstOrder.subscribe(x => console.log(x));
}
