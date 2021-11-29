import { fromEvent, interval, EMPTY } from 'rxjs';
import { windowToggle, mergeAll, map, buffer } from 'rxjs/operators';

export const windowToggleOperator = () => {
  const observable = interval(500);
  const openings = interval(1000);

  const result = observable.pipe(
    windowToggle(
      openings,
      i =>{
        return i % 2 ? interval(500) : EMPTY
      }
    ),
    map(
      win => win.pipe(
        buffer(EMPTY)
      )
    ),
    mergeAll()
  );
  result.subscribe(x => console.log(x));
}
