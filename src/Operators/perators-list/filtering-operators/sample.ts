import { fromEvent, interval } from 'rxjs';
import { sample } from 'rxjs/operators';

export const sampleOperator = () => {
  const seconds = interval(1000);
  const clicks = fromEvent(document, 'click');
  // 每当另一个 Observable notifier (clicks) 发射时，从 Observable (seconds) 发出最近发射的值。
  const result = seconds.pipe(sample(clicks));
  result.subscribe(x => console.log(x));
}