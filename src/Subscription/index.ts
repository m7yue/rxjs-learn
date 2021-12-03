import { interval } from 'rxjs';


export const subscriptionDemo = () => {
  const observable1 = interval(400);
  const observable2 = interval(300);
  
  const subscription = observable1.subscribe(x => console.log('first: ' + x));
  const childSubscription = observable2.subscribe(x => console.log('second: ' + x));
  
  // Subscriptions can also be put together,  You can do this by "adding" one subscription into another:
  subscription.add(childSubscription);

  // Subscriptions also have a remove(otherSubscription) method
  subscription.remove(childSubscription)
  
  setTimeout(() => {
    // Unsubscribes BOTH subscription and childSubscription
    subscription.unsubscribe();
  }, 1000);
}
