import { range  } from 'rxjs';

export const rangeOperator = () => {
  const numbers = range(7, 3); // start, count
 
  numbers.subscribe({
   next: value => { console.log(value) },
   complete: () => { console.log('Complete!') }
  });
}