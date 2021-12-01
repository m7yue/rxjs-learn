import { Subject } from 'rxjs';
import { isEmpty } from 'rxjs/operators';

export const isEmptyOperator = () => {
  const source = new Subject<string>();
  const result = source.pipe(isEmpty());

  // source.subscribe(x => console.log(x));  
  result.subscribe(x => console.log(x));
  source.next('a');

  result.subscribe(x => console.log(x));
  source.next('b');
  
  result.subscribe(x => console.log(x));
  source.next('c');
  
  result.subscribe(x => console.log(x));
  source.complete();
}