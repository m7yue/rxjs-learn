import { interval, EMPTY, of, timer, from, timeout } from 'rxjs';
import { bufferToggle, map, bufferTime } from 'rxjs/operators';

export const bufferToggleOperator = () => {
  const observable = interval(500); // 数据源时间线，源源不断的数据
  const openings = interval(1000); // 每次开始记录的时间点

  // Every other second, emit the observables from the next 500ms
  const buffered = observable.pipe(
    bufferToggle(openings, i =>{
      return i % 2 ? EMPTY : timer(500) // 每次结束记录的时间点
    }
  ));
  buffered.subscribe(x => console.log(x));


  // 用 bufferTime 实现同样功能, 每2s, 发送 500ms 后 Observable 组成的数组
  const buffered1 = observable.pipe(bufferTime(500, 2000));
  // buffered1.subscribe(x => console.log(x));
}

