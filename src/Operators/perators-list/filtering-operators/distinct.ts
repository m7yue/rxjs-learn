import { of } from 'rxjs';
import { distinct } from 'rxjs/operators';

// 去重
export const distinctOperator = () => {
  // of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1)
  // .pipe(
  //   distinct()
  // )
  // .subscribe(x => console.log(x));


  interface Person {
    age: number,
    name: string
  }
    
  of(
      { age: 4, name: 'Foo'},
      { age: 7, name: 'Bar'},
      { age: 5, name: 'Foo'},
      { age: 5, name: 'Bar'}
    ).pipe(
      distinct((p: Person) => p.name)
    )
    .subscribe(x => console.log(x));
}
