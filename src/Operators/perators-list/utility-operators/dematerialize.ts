import { of, NextNotification, ErrorNotification, ObservableNotification, CompleteNotification } from 'rxjs';
import { dematerialize } from 'rxjs/operators';

export const dematerializeOperator = () => {
  const notifyA: ObservableNotification<string> = { kind: 'N', value: 'A' };
  const notifyB: ObservableNotification<string> = { kind: 'N', value: 'B' };
  const notifyE: ObservableNotification<Error> = { kind: 'E', error: new TypeError('x.toUpperCase is not a function') }
  
  const materialized = of(notifyA, notifyB, notifyE);
  
  // 将可 ObservableNotification 转换为实际的 Observable
  const upperCase = materialized.pipe(dematerialize<any>());
  upperCase.subscribe({
     next: x => console.log(x),
     error: e => console.error(e)
  });
}
