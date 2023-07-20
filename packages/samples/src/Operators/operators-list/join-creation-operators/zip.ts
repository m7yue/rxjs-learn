import { zip, of, interval, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

export const zipOperator = () => {
  let age$ = of(27, 25, 29);
  let name$ = of('Foo', 'Bar', 'Beer');
  let isDev$ = of(true, true, false);
   
  zip(age$, name$, isDev$).pipe(
    map(([age, name, isDev]) => ({ age, name, isDev }))
  )
  .subscribe(x => console.log(x));


  // let ob1 = interval(1000);
  // let ob2 = interval(2000);
  // // 这种其实会形成性能问题
  // let ob3 = fromEvent(document, 'click');
   
  // zip(ob1, ob2, ob3).pipe(
  //   map(([v1, v2, v3]) => ({ v1, v2, v3 }))
  // )
  // .subscribe(x => console.log(x));
}