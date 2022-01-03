import { Subject, from } from 'rxjs';

export const subjectDemo = () => {
  // const subject = new Subject<number>();

  // subject.subscribe({
  //   next: (v) => console.log(`observerA: ${v}`)
  // });
  // subject.subscribe({
  //   next: (v) => console.log(`observerB: ${v}`)
  // });
  
  // subject.next(1);
  // subject.next(2);
  
  
  
  const subject = new Subject<number>();
  
  // 必须在 observable.subscribe 之前
  subject.subscribe({
    next: (v) => console.log(`observerA: ${v}`)
  });
  subject.subscribe({
    next: (v) => console.log(`observerB: ${v}`)
  });
  
  const observable = from([1, 2, 3]);
  
  observable.subscribe(subject);
}

 // You can subscribe providing a Subject

// Logs:
// observerA: 1
// observerB: 1
// observerA: 2
// observerB: 2
// observerA: 3
// observerB: 3