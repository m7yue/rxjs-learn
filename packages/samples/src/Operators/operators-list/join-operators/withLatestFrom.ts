import { fromEvent, interval, timer } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';

// 将源 Observable 与其他 Observable 组合以创建 Observable
export const withLatestFromOperator = () => {
  const clicks = fromEvent(document, 'click');
  const timer1 = interval(1000);
  const timer2 = interval(500);

  const result = clicks.pipe(
    withLatestFrom(timer1, timer2, timer2)
  );
  result.subscribe(x => console.log(x));
}
