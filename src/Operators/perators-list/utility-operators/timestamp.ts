import { fromEvent } from 'rxjs';
import { timestamp } from 'rxjs/operators';


export const timestampOperator = () => {
  const clickWithTimestamp = fromEvent(document, 'click').pipe(
    timestamp()
  );
  
  // Emits data of type {value: MouseEvent, timestamp: number}
  clickWithTimestamp.subscribe(data => {
    console.log(data);
  });
}