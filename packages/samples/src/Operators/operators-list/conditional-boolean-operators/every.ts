import { of } from 'rxjs';
import { every } from 'rxjs/operators';


export const everyOperator = () => {
  of(1, 2, 3, 4, 5, 6).pipe(
    every(x => x < 5),
  )
  .subscribe(x => console.log(x)); // -> false
}

// export function every<T>(
//   predicate: (value: T, index: number, source: Observable<T>) => boolean,
//   thisArg?: any
// ): OperatorFunction<T, boolean> {
//   return operate((source, subscriber) => {
//     let index = 0;
//     source.subscribe(
//       new OperatorSubscriber(
//         subscriber,
//         (value) => {
//           if (!predicate.call(thisArg, value, index++, source)) {
//             subscriber.next(false);
//             subscriber.complete();
//           }
//         },
//         () => {
//           subscriber.next(true);
//           subscriber.complete();
//         }
//       )
//     );
//   });
// }
