import { iif, of, Observable } from 'rxjs';

export const iifOperator = () => {
  let subscribeToFirst: boolean;

  // const firstOrSecond = iif(
  //   () => subscribeToFirst,
  //   of('first'),
  //   of('second'),
  // );

  // firstOrSecond.subscribe(console.log)

  const firstOrSecond = new Observable((subscriber) => {
    console.log(999999);
    ((() => subscribeToFirst)()
      ? of('first')
      : of('second')
    ).subscribe(subscriber);
  });
   
  subscribeToFirst = true;
  firstOrSecond.subscribe(value => console.log(value));
   
  subscribeToFirst = true;
  firstOrSecond.subscribe(value => console.log(value));

  subscribeToFirst = false;
  firstOrSecond.subscribe(value => console.log(value));


  // 每一个 subscribe 都会调用一次 _subscribe
}