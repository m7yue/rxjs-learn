import { fromEvent, interval } from 'rxjs';
import { sampleTime } from 'rxjs/operators';

export const sampleTimeOperator = () => {  
  const clicks = fromEvent(document, 'click');
  const result = clicks.pipe(sampleTime(2000));
  result.subscribe((x:any) => console.log(x.clientX));
}
