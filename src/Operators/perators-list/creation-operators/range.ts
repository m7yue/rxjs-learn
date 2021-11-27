import { range  } from 'rxjs';

export const rangeOperators = () => {
  const numbers = range(1, 3);
 
  numbers.subscribe({
   next: value => { console.log(value) },
   complete: () => { console.log('Complete!') }
  });
}