import { from } from 'rxjs';
import { last } from 'rxjs/operators';

export const lastOperator = () => {
  // const source = from(['x', 'y', 'z']);
  // const example = source.pipe(last());
  // example.subscribe(val => console.log(`Last alphabet: ${val}`));


  const source = from(['x', 'y', 'z']);
  const example = source.pipe(last(char => char === 'a', 'not exist'));
  example.subscribe(val => console.log(`'a' is ${val}.`));
}
