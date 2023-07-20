import { ReplaySubject } from 'rxjs';

export const replaySubjectDemo = () => {
  const subject = new ReplaySubject(2); // buffer 3 values for new subscribers

  const subscription1 = subject.subscribe({
    next: (v) => console.log((`observerA: ${v}`)) // 1, 2, 3, 4
  });
  
  subject.next(1);
  subject.next(2);
  subject.next(3);
  subject.next(4);

  subscription1.unsubscribe()
  console.log('observerA closed:', subscription1.closed)
  
  // 新的订阅者，会重播就值给新的订阅者
  // 从 3 开始重播, 从后往前数2个 3, 4
  const subscription2 = subject.subscribe({
    next: (v) => console.log((`observerB: ${v}`)) // 3, 4, 5
  });
  
  subject.next(5);

  subscription2.unsubscribe()

  subject.subscribe({
    next: (v) => console.log((`observerC: ${v}`)) // 4, 5
  });

  // const subject = new ReplaySubject(3, 500 /* windowTime */); //dow old time: 500ms 之前的数据
 
  // subject.subscribe({
  //   next: (v) => console.log(`observerA: ${v}`)
  // });
  
  // let i = 1;
  // setInterval(() => subject.next(i++), 400);
  
  // setTimeout(() => {
  //   subject.subscribe({
  //     next: (v) => console.log(`observerB: ${v}`)
  //   });
  // }, 2000);
}