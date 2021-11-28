import { of } from 'rxjs';
import { mergeMap, groupBy, reduce, map } from 'rxjs/operators';

export const groupByOperator = () => {
  // of(
  //   {id: 1, name: 'JavaScript'},
  //   {id: 2, name: 'Parcel'},
  //   {id: 2, name: 'webpack'},
  //   {id: 1, name: 'TypeScript'},
  //   {id: 3, name: 'TSLint'}
  // ).pipe(
  //   groupBy(p => p.id),
  //   mergeMap((group$) => {
  //     return group$.pipe(reduce((acc: any[], cur) => [...acc, cur], []))
  //   })
  // )
  // .subscribe(p => console.log(p));


  of(
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'Parcel' },
    { id: 2, name: 'webpack' },
    { id: 1, name: 'TypeScript' },
    { id: 3, name: 'TSLint' }
  )
    .pipe(
      groupBy(p => p.id),
      mergeMap(group$ =>
        group$.pipe(reduce((acc: any[], cur) => [...acc, cur], [`${group$.key}`]))
      ),
      map(arr => ({ id: parseInt(arr[0], 10), values: arr.slice(1) }))
   )
   .subscribe(p => console.log(p));
}