import { of, Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';

export const test = () => {
  const observable = new Observable<number>(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
  });

  const ofObservable = of(1, 2, 3)
  console.log(observable, ofObservable)

  observable.pipe(map((x) => x * x))
  .subscribe((v) => console.log(`observable value: ${v}`));
  
  ofObservable.pipe(
    // map((x) => x * x),
    
    // first(),
    first(x => x === 2)
  )
  .subscribe((v) => console.log(`ofObservable value: ${v}`));

}
