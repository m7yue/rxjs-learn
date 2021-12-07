import { fromEvent, of, EMPTY } from 'rxjs';
import { windowCount, map, mergeAll, buffer } from 'rxjs/operators';

// It's like bufferCount, but emits a nested(嵌套的) Observable instead of an array.
export const windowCountOperator = () => {
  const clicks = fromEvent(document, 'click');
  // const data = of('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i')
  // const result = data.pipe(
  //   windowCount(3),
  //   map(win => {
  //     return win.pipe(
  //       buffer(EMPTY)
  //     )
  //   }),
  //   mergeAll()
  // );
  // result.subscribe({
  //   next: x => console.log(x),
  // });

  const data = of('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i')
  const result = data.pipe(
    windowCount(3, 2),
    map(win => {
      return win.pipe(
        buffer(EMPTY)
      )
    }),
    mergeAll()
  );
  result.subscribe({
    next: x => console.log(x),
  });
}
