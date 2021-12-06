import { bindCallback, of } from 'rxjs';
import { map, mergeAll } from 'rxjs/operators';

export const bindCallbackOperator = () => {
  const someFunctionWithCallback = (n: number, cb: (m: string) => void) => {
    if (n >= 7) {
      cb(`${n}大于等于7, 校验成功`)
    }
    else {
      cb(`${n}小于7, 校验失败`)
    }
  };
  
  const boundSomeFunction = bindCallback(someFunctionWithCallback);
  boundSomeFunction(7).subscribe(console.log)

  // const observable = of(4, 5, 6, 7, 8, 9).pipe(
  //   map(v => boundSomeFunction(v)),
  //   mergeAll()
  // )
  
  // observable.subscribe(values => {
  //   console.log(values);
  // });
}

// bindCallback 接受类似 node 回调方式函数， 底层利用 subject 返回一个新的 Observable, 内部构造回调执行，并把结果当作 Observable