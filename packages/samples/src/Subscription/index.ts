import { interval } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';


export const subscriptionDemo = () => {
  const globalObservable = new Subject()
  const observable1 = interval(400);
  const observable2 = interval(300);

  const globalSubscription =  globalObservable.subscribe()
  const subscription = observable1.subscribe(x => console.log('first: ' + x));
  const childSubscription = observable2.subscribe(x => console.log('second: ' + x));

  globalSubscription.add(subscription)

  // Subscriptions can also be put together,  You can do this by "adding" one subscription into another:
  // subscription.add(childSubscription);
  // or
  globalSubscription.add(childSubscription)

  // Subscriptions also have a remove(otherSubscription) method
  // subscription.remove(childSubscription)
  
  setTimeout(() => {
    globalSubscription.unsubscribe()
    // Unsubscribes BOTH subscription and childSubscription
    // subscription.unsubscribe();
  }, 1000);
}

// 可以一层套一层，从根触发，一直到叶子结点
