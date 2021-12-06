import { defer, fromEvent, interval } from 'rxjs';

export const deferOperators = () => {
  const observableFactory = () => {
    console.log('call')
    return new Promise(re => {
      setTimeout(() => {
        // re(fromEvent(document, 'click'))
        re(7)
      }, 500);
    })
    // return Math.random() > 0.5
    //   ? fromEvent(document, 'click')
    //   : interval(1000);
  }

  const clicksOrInterval = defer(observableFactory);
  clicksOrInterval.subscribe(x => console.log(x));
}

// 内部对 observableFactory 返回值的以下类型进行处理： 
// Observable， ArrayLike， Promise， AsyncIterable， Iterable， ReadableStreamLike

