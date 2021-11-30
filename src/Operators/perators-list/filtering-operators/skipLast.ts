import { of } from 'rxjs';
import { skipLast } from 'rxjs/operators';

export const skipLastOperator = () => {
  const numbers = of(1, 2, 3, 4, 5);
  const skipLastTwo = numbers.pipe(skipLast(2));
  skipLastTwo.subscribe(x => console.log(x));
}