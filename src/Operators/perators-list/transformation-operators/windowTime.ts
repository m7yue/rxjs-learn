import { fromEvent, interval, EMPTY } from 'rxjs';
import { windowTime, map, mergeAll, buffer } from 'rxjs/operators';

export const windowTimeOperator = () => {
  const data = interval(1000)

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
