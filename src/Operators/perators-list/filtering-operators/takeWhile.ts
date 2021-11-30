import { fromEvent, interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

export const takeWhileOperator = () => {
  const clicks = fromEvent(document, 'click');
  const seconds = interval(1000)
  
  const result = seconds.pipe(
    takeWhile((x) => {
      // 当为false时停止take 
      return x < 7
    }));
  result.subscribe(x => console.log(x));
}
