import { of } from 'rxjs';
import { ignoreElements } from 'rxjs/operators';

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