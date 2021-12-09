import { fromEvent, interval } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';

// 将源 Observable 与其他 Observable 组合以创建 Observable 其值是根据每个值的最新值计算得出的
export const withLatestFromOperator = () => {
  const clicks = fromEvent(document, 'click');
  const timer = interval(1000);

  const result = clicks.pipe(
    withLatestFrom(timer)
  );
  result.subscribe(x => console.log(x));
}
