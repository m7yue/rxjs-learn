import { EMPTY, fromEvent, interval, timer } from 'rxjs';
import { elementAt, mapTo, take } from 'rxjs/operators';

export const elementAtOperator = () => {
  const clicks = fromEvent(document, 'click');
  // Emit only the third click event
  const result = clicks.pipe(
    // take(1), // 没有到点击第三下，结束了，返回 defaultValue
    elementAt(2, 'defaultValue') // 索引从 0 开始
  );
  result.subscribe((x: any) => console.log(x));
}