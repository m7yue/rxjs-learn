import { Observer, Subscriber } from 'rxjs'

export const SubscriberDemo = () => {
  const observerOrNext: Observer<number> = {
    next(x) { 
      console.log('got value ' + x);
    },
    error(err) { console.error('something wrong occurred: ' + err); },
    complete() { console.log('done'); }
  }

  const subscriber = new Subscriber(observerOrNext)
  console.log(subscriber)
}

