import { of } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

export const distinctUntilKeyChangedOperator = () => {
  interface Person {
    age: number,
    name: string
  }

  // of(
    //   { age: 4, name: 'Foo'},
    //   { age: 7, name: 'Bar'},
    //   { age: 5, name: 'Foo'},
    //   { age: 6, name: 'Foo'},
    // ).pipe(
    //   distinctUntilKeyChanged('name'),
    // )
    // .subscribe(x => console.log(x));


    of(
      { age: 4, name: 'Foo1'},
      { age: 7, name: 'Bar'},
      { age: 5, name: 'Foo2'},
      { age: 6, name: 'Foo3'},
    ).pipe(
      // 如果提供了比较器功能，则将为每个项目调用比较器功能，以测试是否应发出该值。
      distinctUntilKeyChanged('name', (x: string, y: string) => x.substring(0, 3) === y.substring(0, 3)),
    )
    .subscribe(x => console.log(x));
}