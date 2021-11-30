import { interval, range } from 'rxjs';
import { takeLast, take } from 'rxjs/operators';

export const takeLastOperator = () => {
  const many = range(1, 100);
  const s = interval(1000).pipe(take(6))
  const lastThree = s.pipe(takeLast(3));
  lastThree.subscribe(x => console.log(x));
}
