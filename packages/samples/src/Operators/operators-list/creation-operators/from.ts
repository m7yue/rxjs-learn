import { take } from 'rxjs/operators';
import { from, asyncScheduler } from 'rxjs';

export const fromOperator = () => {
  // const array = [10, 20, 30];
  // const result = from(array);
  // result.subscribe(x => console.log(x));


  // function* generateDoubles(seed: number) {
  //     let i = seed;
  //     while (true) {
  //       yield i;
  //       i = 2 * i; // double it
  //     }
  // }
    
  // const iterator = generateDoubles(3);
  // const result = from(iterator).pipe(take(10));
  // result.subscribe(x => console.log(x));



  console.log('start');

  const array = [10, 20, 30];
  const p = Promise.resolve(88888)
  // const result = from(array, asyncScheduler);
  const result = from(p)

  result.subscribe(x => console.log(x));

  console.log('end');

  // innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler))
}