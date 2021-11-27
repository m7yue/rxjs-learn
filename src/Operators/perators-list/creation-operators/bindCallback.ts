import { bindCallback } from 'rxjs';

export const bindCallbackOperator = () => {
  const someFunction = (n: number, cb: (m: string) => void) => {
    cb(n + '==========')
  };
  
  const boundSomeFunction = bindCallback(someFunction);
  boundSomeFunction(7)
  .subscribe(values => {
    console.log(values);
  });
}

// bindCallback 接受类似 node 回调方式函数， 底层利用 subject 返回一个新的 Observer, 内部构造回调执行，并把结果当作 Observerable