import { of } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

export const distinctUntilChangedOperator = () => {
  // of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1)
  // .pipe(
  //   distinctUntilChanged(
  //     // 比较器：执行此代码以确认是否发出此值, true 不发出
  //     (pre, cur) => {
  //       // console.log(pre, cur)
  //       return pre === cur
  //     }
  //   )
  // )
  // .subscribe(x => console.log(x));


  interface Person {
    age: number,
    name: string
  }
    
  of(
      // { age: 4, name: 'Foo'},
      // { age: 5, name: 'Foo'},
      // { age: 7, name: 'Bar'},

      { age: 4, name: 'Foo'},
      { age: 7, name: 'Bar'},
      { age: 5, name: 'Foo'},
    ).pipe(
      distinctUntilChanged(
        (pre, cur) => {
          return pre === cur
        },
        (p: Person) => p.name
      )
    )
    .subscribe(x => console.log(x));
}
