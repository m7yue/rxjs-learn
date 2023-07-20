import { Observable, of } from 'rxjs';

function delay<T>(delayInMs: number, sync: boolean = true) {
  return (observable: Observable<T>) => {
    return new Observable<T>((subscriber) => {
      // this function will be called each time this Observable is subscribed to.
      const allTimerIDs = new Set<NodeJS.Timeout>();
      let hasCompleted = false;

      let isResolving = false

      let pending: T[]= []

      const subscription = observable.subscribe({
        next(value) {
          if (sync) {
            if (!isResolving) {
              pending.push(value)
            }
          }
          else {
            // 为什么加定时器就会执行两次???: 因为开启了 react 严格模式
            const timerID = setTimeout(() => {
              subscriber.next(value);
              allTimerIDs.delete(timerID);

              if (hasCompleted && allTimerIDs.size === 0) {
                subscriber.complete();
              }
            }, delayInMs);
            allTimerIDs.add(timerID);
          }

        },
        error(err) {
          // We need to make sure we're propagating our errors through.
          subscriber.error(err);
        },
        complete() {
          if (!sync) {
            hasCompleted = true;
            // If we still have timers running, we don't want to yet.
            if (allTimerIDs.size === 0) {
              subscriber.complete();
            }
            return
          }
          if (pending.length > 1) {
            const first = pending.splice(0, 1)[0]
            pending.reduce((p, v) => {
              return p.then((pre) => {
                subscriber.next(pre);
                
                return sleep(v, delayInMs)
              })
            }, sleep(first, delayInMs))
            .then((v) => {
              subscriber.next(v);
              subscriber.complete();
            })
          }
        },
      });

      // Return the teardown logic. This will be invoked when the result errors, completes, or is unsubscribed.
      return () => {
        subscription.unsubscribe();
        // Clean up our timers.
        for (const timerID of allTimerIDs) {
          clearTimeout(timerID);
        }
      };
    });
  }
}

const sleep = function<T>(v: T, t: number){
  return new Promise<T>(resolve => {
    setTimeout(() => {
      resolve(v)
    }, t);
  })
}



export const customDelayOperator = () => {
  const sourceObservable =  of(1, 2, 3)
  
  const pipeObservable = sourceObservable.pipe(delay(1000, true))
  
  // pipeObservable.subscribe({
  //   next: v => console.log(v),
  //   // complete: () => console.log('complete')
  // });

  const sub = pipeObservable.subscribe(v => console.log(v));

  if (!sub.closed) {
    setTimeout(() => {
      sub.unsubscribe()
    }, 2500);
  }
}