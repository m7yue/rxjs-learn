/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Observable, config } from 'rxjs';

export const AsyncIterableDemo = () => {

  const observable = new Observable<number>(subscriber => {
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

    // _teardowns.push ==>  unsubscribe ==> execTeardown
    return function unsubscribe() {
      console.log('unsubscribe_aaa')
    };
  });

  async function main() {
    for await (const value of observable) {
      console.log('Symbol.asyncIterator', value)
    }
  }

  main()
}