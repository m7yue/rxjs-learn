import { fromEvent, interval } from 'rxjs';
import { audit } from 'rxjs/operators'

export const auditOperator = () => {
  const clicks = fromEvent(document, 'click');
  const result = clicks.pipe(audit(ev => interval(1000)));
  result.subscribe((x: any) => console.log(x.clientX));
}

// 忽略之前的值， 然后发出当前新值， throttle 是先发出值，然欧忽略特定时间内的后续值