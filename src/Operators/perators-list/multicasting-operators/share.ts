import { interval } from 'rxjs';
import { share, map } from 'rxjs/operators';

export const shareOperator = () => {
  const source = interval(1000)
  .pipe(
    map((x: number) => {
      // console.log('Processing: ', x);
      return x*x;
    }),
    share()
  );

  const sub1 = source.subscribe(x => console.log('subscription 1: ', x));
  let sub2: any = null


  setTimeout(
    () => {
      sub2 = source.subscribe(x => console.log('subscription 2: ', x));
    },
    2000
  )

  // 当所有订阅者都取消订阅后，它将从源 Observable 取消订阅。
  setTimeout(
    () => {
      sub1.unsubscribe()
      sub2.unsubscribe()
    },
    6000
  )
}