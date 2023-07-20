/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Observable, config } from 'rxjs';

/**
 * 全局配置
 * 当 observable 已经停止被订阅时，如果再执行 subscriber.xxx 的通知
 * 并且是在 setTimeout 中执行的
 */
config.onStoppedNotification = (notification) => {
  console.log('has been stoped!', notification)
}

/**
 * 自定义逻辑
 * 
 * 子类：
 *    Subject：BehaviorSubject，ReplaySubject，AsyncSubject
 */
export const ObservableDemo = () => {
  let tv = null

  // 调用 observable.subscribe 函数就会执行 subscribe
  const observable = new Observable<number>(subscriber => {
    tv = subscriber

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

  
  console.log('just before subscribe');
  const subscription1 = observable.subscribe({
    next(x) { 
      console.log('got value ' + x);
    },
    error(err) { console.error('something wrong occurred: ' + err); },
    complete() { console.log('done'); }
  });

  /**
   * 可以看出来 subscription1 和 subscriber 是同一个东西
   */
  console.log(tv === subscription1) // true

  // @ts-ignore
  subscription1.next(777) // subscriber === subscription1

  Promise.resolve().then(() => {
    observable.subscribe((v) => {
      console.log('async next', v)
    })
  })

  subscription1.unsubscribe(); // 只是当前订阅被取消了

  observable.subscribe(x => {
    console.log(x, '====');
  });
  console.log('just after subscribe');
}

/**
  function pipe(...operations) {
    return pipeFromArray(operations)(this);
  }

  export function pipeFromArray(fns) {
    return function piped(input) {
      return fns.reduce((prev: any, fn) => fn(prev), input);
    };
  }
 */


/**
  destination = {
    next,
    error,
    complete
  }
 */

  // Observable.subscribe(fn | Observer) ===> subscriber: {next, complete, error, unsubscribe}, destination ===>  this._subscribe(subscriber)
  // Subscriber.next(value) ===> this._next(value) ===>  this.destination.next(value) ===> Observable.subscribe(Observer): next, err, complete call...


/**
 * 定义： 在任意时间段内，任意一组值的表现形式
 * 
 */