import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

export const mapOperator = () => {
  const clicks = fromEvent(document, 'click');
  const positions = clicks.pipe(map((ev: any) => ev.clientX));
  positions.subscribe(x => console.log(x));
}