import { fromEvent, of } from 'rxjs';
import { bufferCount, buffer  } from 'rxjs/operators';

export const bufferCountOperator = () => {
  const data = of('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i')
  const buffered = data.pipe(bufferCount(3, 2));
  buffered.subscribe(x => console.log(x));
  
  // mock
  let buffers: string[][] = [];
  let count = 0;
  data.subscribe({
    next: val => {
      let toEmit: string[][] | null = null;

      if (count++ % 2 === 0) {
        buffers.push([]);
      }
      for (const buffer of buffers) {
        buffer.push(val);

        if (3 <= buffer.length) {
          toEmit = toEmit ?? [];
          toEmit.push(buffer);
        }
      }
      if (toEmit) {
        for (const buffer of toEmit) {
          arrRemove(buffers, buffer);
          console.log(buffer)
        }
      }
    }, 
    complete: () => {
      for (const buffer of buffers) {
        console.log(buffer)
      }
    }
  })
}

function arrRemove<T>(arr: T[] | undefined | null, item: T) {
  if (arr) {
    const index = arr.indexOf(item);
    0 <= index && arr.splice(index, 1);
  }
}
