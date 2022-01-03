import { Subject } from 'rxjs';
import { isEmpty } from 'rxjs/operators';

// 如果输入 observable 发出任何值，则发出 false
// 如果输入的 observable 完成而没有发出任何值，则发出 true
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