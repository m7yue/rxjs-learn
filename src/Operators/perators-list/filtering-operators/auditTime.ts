import { fromEvent, interval } from 'rxjs';
import { auditTime } from 'rxjs/operators'

export const auditTimeOperator = () => {
  const clicks = fromEvent(document, 'click');
  const result = clicks.pipe(auditTime(1000));
  result.subscribe((x: any) => console.log(x.clientX));
}