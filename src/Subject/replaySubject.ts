import { ReplaySubject } from 'rxjs';

export const replaySubjectDemo = () => {
  const subject = new ReplaySubject(2); // buffer 3 values for new subscribers

  subject.subscribe({
    next: (v) => console.log(`observerA: ${v}`)
  });
  
  subject.next(1);
  subject.next(2);
  subject.next(3);
  subject.next(4);
  
  // 从 3 开始重播
  subject.subscribe({
    next: (v) => console.log(`observerB: ${v}`)
  });
  
  subject.next(5);



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