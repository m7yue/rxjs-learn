import { fromEvent } from 'rxjs';
import { pairwise, map } from 'rxjs/operators';

// Puts the current value and previous value together as an array, and emits that.
export const pairwiseOperator = () => {
  const clicks = fromEvent(document, 'click');
  const pairs = clicks.pipe(pairwise());
  const distance = pairs.pipe(
    map((pair: any) => {
      console.log(pair)
      const x0 = pair[0].clientX;
      const y0 = pair[0].clientY;
      const x1 = pair[1].clientX;
      const y1 = pair[1].clientY;
      return Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
    }),
  );
  distance.subscribe(x => console.log(x));
}
