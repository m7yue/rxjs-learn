import { fromEvent, merge } from 'rxjs';
import { timestamp } from 'rxjs/operators';


export const timestampOperator = () => {
  const mouseWheel = fromEvent(document, 'mousewheel')
  const mouseMove = fromEvent(document, 'mousemove')
  const click = fromEvent(document, 'click')

  const clickWithTimestamp = merge(
    mouseWheel,
    mouseMove,
    click
  ).pipe(
    timestamp()
  );
  
  // Emits data of type {value: MouseEvent, timestamp: number}
  clickWithTimestamp.subscribe(data => {
    console.log(data);
  });
}