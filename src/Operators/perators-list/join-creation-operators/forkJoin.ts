import { forkJoin, of, timer } from 'rxjs';

export const forkJoinOperator = () => {
  // const observable = forkJoin({
  //   foo: of(1, 2, 3, 4),
  //   bar: Promise.resolve(8),
  //   baz: timer(2000),
  // });
  // observable.subscribe({
  //  next: value => console.log(value),
  //  complete: () => console.log('This is how it ends!'),
  // });


  const observable = forkJoin([
    of(1, 2, 3, 4),
    Promise.resolve(8),
    timer(4000),
  ]);
  observable.subscribe({
  next: value => console.log(value),
  complete: () => console.log('This is how it ends!'),
  });
}