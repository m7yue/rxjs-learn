import { bindNodeCallback } from 'rxjs';

export const bindNodeCallbackOperator = () => {
  const someFunction = (n: number, cb: (err: any, m: string) => void) => {
    cb(null, n + '==========')
    // cb('null', n + '==========')
  };
  
  const boundSomeFunction = bindNodeCallback(someFunction);
  boundSomeFunction(7)
  .subscribe(values => {
    console.log(values);
  });
}

// 和 bindCallback 本质上没有区别，只是区分了 node api 回调参数 第一个为 err, 如果 err 不为 null 则触发 subject.err
