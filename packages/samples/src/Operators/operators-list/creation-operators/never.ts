import { NEVER, startWith } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

export const neverDemo = () => {
  const info = () => console.log('Will not be called');

  const result = NEVER.pipe(startWith(7));
  const subscription = result.subscribe({
    next: x => console.log(x),
    error: info,
    complete: info // 不会执行
  });

  console.log(subscription.closed)

  subscription.unsubscribe()

  console.log(subscription.closed)
}


// const EMPTY = new Observable<never>((subscriber) => subscriber.complete());

// 一个既不发出值、错误和完成的 Observable， 注意，由于从未发出完整的通知，此观察对象可防止订阅被自动释放。需要手动释放订阅。