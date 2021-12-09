import { of } from 'rxjs';
import { ignoreElements } from 'rxjs/operators';

// 忽略源 Observable 发出的所有项目，仅传递 调用 complete或的 error。
export const ignoreElementsOperator = () => {
  of('you', 'talking', 'to', 'me').pipe(
    ignoreElements(),
  )
  .subscribe(
    {
      next: word => console.log(word),
      error: err => console.log('error:', err),
      complete: () => console.log('the end'),      
    }
  );
}