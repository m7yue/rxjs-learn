import { Observable, asyncScheduler } from 'rxjs';
import { observeOn } from 'rxjs/operators';

export const asyncSchedulerDemo = () => {
  Promise.resolve().then(() => console.log('777'))
  const observable = new Observable((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
  }).pipe(
    observeOn(asyncScheduler)
  );
  
  console.log('just before subscribe');
  observable.subscribe({
    next(x) {
      console.log('got value ' + x)
    },
    error(err) {
      console.error('something wrong occurred: ' + err);
    },
    complete() {
       console.log('done');
    }
  });
  Promise.resolve().then(() => console.log('888'))
  console.log('just after subscribe');
}
