import { of, merge, asyncScheduler } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';
 
export const subscribeOnOperator = () => {
  const a = of(1, 2, 3).pipe(subscribeOn(asyncScheduler));
  const b = of(4, 5, 6);
   
  merge(a, b).subscribe(console.log);  
}