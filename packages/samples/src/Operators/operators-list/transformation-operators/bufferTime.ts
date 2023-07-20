import { fromEvent, of, timer } from 'rxjs';
import { bufferTime } from 'rxjs/operators';

export const bufferTimeOperator = () => {
  const data = timer(0, 500)
  // 发送 2s 内 Observable 组成的数组
  // const buffered = data.pipe(bufferTime(2000));
  
  // 延时4s开始收集, 两秒后 发送收集的Observable 组成的数组
  const buffered = data.pipe(
    bufferTime(2000, 4000)
  );

  buffered.subscribe(x => console.log(x));
}