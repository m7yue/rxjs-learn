import { from } from 'rxjs';
import { skipWhile, skipUntil } from 'rxjs/operators';

export const skipWhileOperator = () => {
  // Using Value: Skip some super heroes
  // const source = from(['Green Arrow', 'SuperMan', 'Flash', 'SuperGirl', 'Black Canary'])
  // // Skip the heroes until SuperGirl
  // const example = source.pipe(skipWhile((hero) => hero !== 'SuperGirl'));
  // // output: SuperGirl, Black Canary
  // example.subscribe((femaleHero) => console.log(femaleHero));


  // Using Index: Skip value from the array until index 5
  const source = from([11, 12, 13, 14, 15, 16, 17, 19, 10]);
  const example = source.pipe(
    // skipWhile((_, index) => index !== 5)
    ); // index !== 5 全部跳过
  // output: 6, 7, 9, 10
  example.subscribe((val) => console.log(val));
}
