import { fromEvent, interval } from 'rxjs';
import { buffer } from 'rxjs/operators';

export const bufferOperator = () => {
  const clicks = fromEvent(document, 'click');
  const intervalEvents = interval(1000);
  const buffered = intervalEvents.pipe(buffer(clicks));

  // 每次点击只会记录上一次开始产生的数据
  buffered.subscribe(x => console.log(x));


  // 内部实现原理
  // let currentBuffer:number[] = [];
  // intervalEvents.subscribe(val => currentBuffer.push(val))
  // clicks.subscribe(val => {
  //   const b = currentBuffer;
  //   currentBuffer = [];
  //   console.log(b)
  // })
}