import { defer, fromEvent, interval } from 'rxjs';

export const deferOperators = () => {
  const clicksOrInterval = defer(function () {
    console.log('call')
    return new Promise(re => {
      setTimeout(() => {
        re(fromEvent(document, 'click'))
      }, 500);
    })
    // return Math.random() > 0.5
      // ? fromEvent(document, 'click')
      // : interval(1000);
  });
  clicksOrInterval.subscribe(x => console.log(x));
}

