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
  const sub2 = source.subscribe(x => console.log('subscription 2: ', x));


  // 当所有订阅者都取消订阅后，它将从源 Observable 取消订阅。
  setTimeout(
   () => sub1.unsubscribe(),
   2000
  )

  setTimeout(
    () => sub2.unsubscribe(),
    4000
  )
}


// Logs:
// Processing:  0
// subscription 1:  0
// subscription 1:  0
// Processing:  1
// subscription 1:  1
// subscription 1:  1
// Processing:  2
// subscription 1:  4
// subscription 1:  4
// Processing:  3
// subscription 1:  9
// subscription 1:  9
// ... and so on