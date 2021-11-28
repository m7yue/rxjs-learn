import { interval, EMPTY, of } from 'rxjs';
import { bufferToggle, map, bufferTime } from 'rxjs/operators';

export const bufferToggleOperator = () => {
  const observable = interval(500);
  const openings = interval(1000);

  // Every other second, emit the observables from the next 500ms
  const buffered = observable.pipe(bufferToggle(openings, i =>{
    return i % 2 ? interval(500) : EMPTY
  }
  ));
  buffered.subscribe(x => console.log(x));


  // 用 bufferTime 实现同样功能, 每2s, 发送 500ms 后 Observable 组成的数组
  const buffered1 = observable.pipe(bufferTime(500, 2000));
  // buffered1.subscribe(x => console.log(x));
}

