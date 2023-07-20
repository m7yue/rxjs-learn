import { fromEvent, interval, EMPTY, timer } from 'rxjs';
import { windowTime, map, mergeAll, buffer } from 'rxjs/operators';

export const windowTimeOperator = () => {
  const data = timer(0, 1000)

  // const result = data.pipe(
  //   windowTime(2000),
  //   map(win => win.pipe(
  //     buffer(EMPTY)
  //   )),
  //   mergeAll(),
  // )
  // result.subscribe(x => console.log(x));

  const result = data.pipe(
    windowTime(2000, 4000),
    map(win => win.pipe(
      buffer(EMPTY)
    )),
    mergeAll(),
  )
  result.subscribe(x => console.log(x));
}
