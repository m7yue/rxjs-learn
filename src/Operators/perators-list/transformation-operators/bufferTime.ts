import { fromEvent, of, timer } from 'rxjs';
import { bufferTime } from 'rxjs/operators';

export const bufferTimeOperator = () => {
  const data = timer(0, 1000)
  // 每2s发送最近 Observable 组成的数组
  const buffered = data.pipe(bufferTime(2000));
  
  // 每4s, 发送两秒后 Observable 组成的数组
  // const buffered = data.pipe(
  //   bufferTime(2000, 4000)
  // );

  buffered.subscribe(x => console.log(x));
}