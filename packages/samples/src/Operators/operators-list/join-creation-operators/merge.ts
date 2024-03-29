import { merge, interval, map } from 'rxjs';
import { take } from 'rxjs/operators';

export const mergeOperator = () => {
  const timer1 = interval(1000).pipe(take(4), map(x => x+'1'));
  const timer2 = interval(1000).pipe(take(4), map(x => x+'2'));
  const timer3 = interval(1000).pipe(take(4), map(x => x+'3'));
  const timer4 = interval(1000).pipe(take(4), map(x => x+'4'));
  const concurrent = 2; // the argument 并发数
  const merged = merge(timer1, timer2, timer3, timer4, 2);
  // const merged = merge(timer1, timer2, timer3);
  merged.subscribe(x => console.log(x));
}

// 时间线， 同时执行几个