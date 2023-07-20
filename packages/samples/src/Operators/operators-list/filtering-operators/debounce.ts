import { fromEvent, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';

// 防抖： 连续快速点击，最终只会生效一次, audit 会生效多次
export const debounceOperator = () => {
  const clicks = fromEvent(document, 'click');
  const result = clicks.pipe(
    debounce((i) => timer(1000)),
  );
  result.subscribe((x: any) => console.log(x.clientX));
}