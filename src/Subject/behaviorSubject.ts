import { BehaviorSubject } from '../rxjs/src/internal/BehaviorSubject';

// 在有新的订阅时会额外发出最近一次发出的值的Subject
const subject = new BehaviorSubject(0); // 0 is the initial value

export const behaviorSubjectDemo = () => {
  subject.subscribe({
    next: (v) => console.log(`observerA: ${v}`)
  });
  
  subject.next(1);
  subject.next(2);
  
  subject.subscribe({
    next: (v) => console.log(`observerB: ${v}`)
  });
  
  subject.next(3);
}

// 假设有我们需要使用它来维护一个状态,在它变化之后给所有重新订阅的人都能发送一个当前状态的数据，
// 这就好比我们要实现一个计算属性，我们只关心该计算属性最终的状态，而不关心过程中变化的值