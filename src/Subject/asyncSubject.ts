import { AsyncSubject } from 'rxjs';

export const asyncSubjectDemo = () => {
  // const subject = new AsyncSubject();

  // subject.subscribe({
  //   next: (v) => console.log(`observerA: ${v}`)
  // });
  
  // subject.next(1);
  // subject.next(2);
  // subject.next(3);
  // subject.next(4);
  
  // subject.subscribe({
  //   next: (v) => console.log(`observerB: ${v}`)
  // });
  
  // subject.next(5);
  // subject.complete();


  // 需求：同时发出 n 个请求， 但是我只想订阅最后一个到达的请求
  const subject = new AsyncSubject();
  const mockReq = () => new Promise(resolve => {
    const res = Math.random() * 2000
    setTimeout(() => {
      console.log(res, '======')
      resolve(res)
    }, res);
  })
  const wrapperReq = (req: typeof mockReq) => req().then((v) => subject.next(v))

  Promise.allSettled([
    wrapperReq(mockReq),
    wrapperReq(mockReq),
    wrapperReq(mockReq),
    wrapperReq(mockReq),
    wrapperReq(mockReq)
  ]).then(() => {
    subject.complete()
  })
  
  subject.subscribe((v) => {
    console.log(`最后一个到达的值: ${v}`)
  })
}

// observerA: 5
// observerB: 5

// 只有当 Observable 执行完成时(执行complete())，它才会将执行的
// 最后一个值发送给观察者，如果因异常而终止，AsyncSubject将不会释
// 放任何数据，但是会向Observer传递一个异常通知。

