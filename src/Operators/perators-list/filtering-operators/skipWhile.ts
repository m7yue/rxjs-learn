import { from } from 'rxjs';
import { skipWhile } from 'rxjs/operators';

export const skipWhileOperator = () => {
  // Using Value: Skip some super heroes
  // const source = from(['Green Arrow', 'SuperMan', 'Flash', 'SuperGirl', 'Black Canary'])
  // // Skip the heroes until SuperGirl
  // const example = source.pipe(skipWhile((hero) => hero !== 'SuperGirl'));
  // // output: SuperGirl, Black Canary
  // example.subscribe((femaleHero) => console.log(femaleHero));


  // Using Index: Skip value from the array until index 5
  const source = from([1, 2, 3, 4, 5, 6, 7, 9, 10]);
  const example = source.pipe(skipWhile((_, i) => i !== 5));
  // output: 6, 7, 9, 10
  example.subscribe((val) => console.log(val));
}
