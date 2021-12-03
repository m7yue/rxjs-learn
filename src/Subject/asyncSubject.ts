import { AsyncSubject } from 'rxjs';

export const asyncSubjectDemo = () => {
  const subject = new AsyncSubject();

  subject.subscribe({
    next: (v) => console.log(`observerA: ${v}`)
  });
  
  subject.next(1);
  subject.next(2);
  subject.next(3);
  subject.next(4);
  
  subject.subscribe({
    next: (v) => console.log(`observerB: ${v}`)
  });
  
  subject.next(5);
  subject.complete();
}

// 只有当 Observable 执行完成时(执行complete())，它才会将执行的
// 最后一个值发送给观察者，如果因异常而终止，AsyncSubject将不会释
// 放任何数据，但是会向Observer传递一个异常通知。