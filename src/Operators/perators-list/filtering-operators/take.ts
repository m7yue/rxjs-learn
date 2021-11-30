import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

export const takeOperator = () => {
  const intervalCount = interval(1000);
  const takeFive = intervalCount.pipe(take(5));
  takeFive.subscribe(x => console.log(x));
}