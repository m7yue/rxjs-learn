import { fromEvent, interval } from 'rxjs';
import { scan, debounce } from 'rxjs/operators';

// 防抖： 连续快速点击，最终只会生效一次
export const debounceOperator = () => {
  const clicks = fromEvent(document, 'click');
  const result = clicks.pipe(
    debounce((i) => interval(500)),
    scan((i) => ++i, 0),
  );
  result.subscribe((x: any) => console.log(x));
}
