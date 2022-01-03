import { timer } from 'rxjs';
import { startWith, map } from 'rxjs/operators';


export const startWithOperator = () => {
  timer(1000, 2000)
  .pipe(
    map((v) => 'timer emit: ' + v),
    startWith('timer start')
  )
  .subscribe(x => console.log(x));
}
// results:
// "timer start"
// "timer emit"