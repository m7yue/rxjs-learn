import { fromEvent, interval, of, map, take } from 'rxjs';
import { bufferWhen } from 'rxjs/operators';

// Collects values from the past as an array. When it starts collecting values,
// it calls a function that returns an Observable that tells when to close the buffer and restart collecting.
export const bufferWhenOperator = () => {
  const clicks = fromEvent(document, 'click');
  const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']

  const data = interval(1000).pipe(take(arr.length), map(i => arr[i]))
  const buffered = data.pipe(bufferWhen(() => clicks));
  buffered.subscribe(x => console.log(x));
}

