import { of } from 'rxjs';
import { skipLast } from 'rxjs/operators';

// 跳过源 Observable 发出的最后 n 个值。
export const skipLastOperator = () => {
  const numbers = of(1, 2, 3, 4, 5);
  const skipLastTwo = numbers.pipe(skipLast(3));
  skipLastTwo.subscribe(x => console.log(x));
}