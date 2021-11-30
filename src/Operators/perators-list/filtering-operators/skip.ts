import { interval } from 'rxjs';
import { skip } from 'rxjs/operators';

export const skipOperator = () => {
  //emit every half second
  const source = interval(500);
  //skip the first 10 emitted values
  const example = source.pipe(skip(10));
  //output: 10...11...12...13........
  const subscribe = example.subscribe(val => console.log(val));
}
