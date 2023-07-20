import { pipe, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// pipe 和 observable 不是一个东西
function discardOddDoubleEven() {
  return pipe<Observable<number>, Observable<number>, Observable<number>>(
    filter((v) => !(v % 2)),
    map((v) => v + v)
  );
}