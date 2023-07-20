import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

export const intervalOperator = () => {
  const numbers = interval(1000);

  const takeFourNumbers = numbers.pipe(take(4));
  takeFourNumbers.subscribe(x => console.log('Next: ', x));
}

// (global as any).setInterval = null