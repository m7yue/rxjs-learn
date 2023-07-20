import { fromEvent, interval } from 'rxjs';
import { sampleTime } from 'rxjs/operators';


// 以周期性的时间间隔对源 Observable 进行采样，发出其采样的内容。
export const sampleTimeOperator = () => {  
  const clicks = fromEvent(document, 'click');
  const result = clicks.pipe(sampleTime(2000));
  result.subscribe((x:any) => console.log(x.clientX));
}
