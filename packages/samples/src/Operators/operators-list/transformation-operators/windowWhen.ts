import { fromEvent, interval,EMPTY } from 'rxjs';
import { windowWhen, map, mergeAll, take, buffer, bufferWhen } from 'rxjs/operators';

export const windowWhenOperator = () => {
  const clicks = fromEvent(document, 'click');
  const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']

  const data = interval(1000).pipe(take(arr.length), map(i => arr[i]))
  const result = data.pipe(
    windowWhen(() => clicks),
    map(win => win.pipe(
      buffer(EMPTY)
    )),
    mergeAll(),
  );
  result.subscribe(x => console.log(x));
}
