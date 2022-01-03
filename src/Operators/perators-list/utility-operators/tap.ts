import { of, interval } from 'rxjs';
import { tap, map, concatMap, take } from 'rxjs/operators';

// 对源 Observable 上的每个发射执行副作用，但返回与源相同的 Observable。
export const tapOperator = () => {
  // of(Math.random()).pipe(
  //   tap(console.log),
  //   map(n => n > 0.5 ? 'big' : 'small')
  // ).subscribe(console.log);


  // const source = of(1, 2, 3, 4, 5)
  // source.pipe(
  //   tap(n => {
  //     if (n > 3) {
  //       throw new TypeError(`Value ${n} is greater than 3`)
  //     }
  //   })
  // )
  // .subscribe(console.log);


  of(1, 2, 3).pipe(
    concatMap(n => {
      return interval(1000).pipe(
        take(Math.round(Math.random() * 10)),
        map(() => 'X'),
        tap({
          complete: () => console.log(`Done with ${n}`)
        })
      )
    })
   )
   .subscribe(console.log);
}
