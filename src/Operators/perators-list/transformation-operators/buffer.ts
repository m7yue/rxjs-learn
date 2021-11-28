import { fromEvent, interval } from 'rxjs';
import { buffer } from 'rxjs/operators';

export const bufferOperator = () => {
  const clicks = fromEvent(document, 'click');
  const intervalEvents = interval(1000);
  const buffered = intervalEvents.pipe(buffer(clicks));

  buffered.subscribe(x => console.log(x));

  // let currentBuffer:number[] = [];
  // intervalEvents.subscribe(val => currentBuffer.push(val))
  // clicks.subscribe(val => {
  //   const b = currentBuffer;
  //   currentBuffer = [];
  //   console.log(b)
  // })
}