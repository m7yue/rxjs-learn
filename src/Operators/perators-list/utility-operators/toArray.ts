import { interval } from 'rxjs';
import { toArray, take } from 'rxjs/operators';

export const toArrayOperator = () => {
  const source = interval(1000);
  const example = source.pipe(
    take(4),
    toArray()
  );
  
  const subscribe = example.subscribe(val => console.log(val));
}

