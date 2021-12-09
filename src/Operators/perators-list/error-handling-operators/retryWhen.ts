import { timer, interval } from 'rxjs';
import { map, tap, delayWhen, retryWhen } from 'rxjs/operators';

export const retryWhenOperator = () => {
  const source = interval(1000);
  const example = source.pipe(
    map(val => {
      if (val > 5) {
        // error will be picked up by retryWhen
        throw val;
      }
      return val;
    }),
    retryWhen((errors: any) => {
      // console.log(errors)
      return errors.pipe(
        // log error message
        tap(val => console.log(`Value ${val} was too high!`)),
        // restart in 5 seconds
        delayWhen((val: number) => timer(val * 1000))
      )
    }
    )
  );
  
  const subscribe = example.subscribe(val => console.log(val));  
}

