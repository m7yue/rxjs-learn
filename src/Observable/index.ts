import { Observable } from 'rxjs';

export const test1 = () => {
  const observable = new Observable(subscriber => {
    try {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
        subscriber.next(5); // Is not delivered because it would violate the contract
      }, 1000);
    }
    catch(err) {
      subscriber.error(err); // delivers an error if it caught one
    }

    return function unsubscribe() {
     console.log('unsubscribe_aaa')
    };
  });
  
  console.log('just before subscribe');
  const subscription = observable.subscribe({
    next(x) { 
      console.log('got value ' + x);
    },
    error(err) { console.error('something wrong occurred: ' + err); },
    complete() { console.log('done'); }
  });

  // subscription.unsubscribe();

  // observable.subscribe(x => {
  //   console.log(x, '====');
  // });
  console.log('just after subscribe');
}