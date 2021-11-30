import { of } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

export const distinctUntilKeyChangedOperator = () => {
  interface Person {
    age: number,
    name: string
  }

  // of(
  //     { age: 4, name: 'Foo'},
  //     { age: 7, name: 'Bar'},
  //     { age: 5, name: 'Foo'},
  //     { age: 6, name: 'Foo'},
  //   ).pipe(
  //     distinctUntilKeyChanged('name'),
  //   )
  //   .subscribe(x => console.log(x));


    of(
      { age: 4, name: 'Foo1'},
      { age: 7, name: 'Bar'},
      { age: 5, name: 'Foo2'},
      { age: 6, name: 'Foo3'},
    ).pipe(
      distinctUntilKeyChanged('name', (x: string, y: string) => x.substring(0, 3) === y.substring(0, 3)),
    )
    .subscribe(x => console.log(x));
}