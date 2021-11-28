import { fromEvent, interval, EMPTY } from 'rxjs';
import { windowToggle, mergeAll } from 'rxjs/operators';

export const windowToggleOperator = () => {
  const clicks = fromEvent(document, 'click');
  const openings = interval(1000);
  const result = clicks.pipe(
    windowToggle(openings, i => i % 2 ? interval(500) : EMPTY),
    mergeAll()
  );
  result.subscribe(x => console.log(x));
}
