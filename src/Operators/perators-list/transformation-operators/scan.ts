import { interval, of, fromEvent } from 'rxjs';
import { scan, map, startWith, mapTo } from 'rxjs/operators';

// It's like reduce, but emits the current accumulation state after each update
export const scanOperator = () => {
  const numbers$ = of(1, 2, 3);

  // numbers$
  //   .pipe(
  //     scan((total, n) => total + n, 7),
  //   )
  //   .subscribe(console.log);


  // const firstTwoFibs = [0, 1];
  // const fibonnaci$ = interval(1000).pipe(
  //   scan(([a, b]) => [b, a + b], firstTwoFibs),
  //   map(([, n]) => n),
  //   startWith(...firstTwoFibs)
  // );
    
  // fibonnaci$.subscribe(console.log);

  const click$ = fromEvent(document, 'click');
  const one$ = click$.pipe(mapTo(1));
  const seed = 0;
  // Count the number of click events
  const count$ = one$.pipe(
    scan((acc, one) => acc + one, seed),
  );
  count$.subscribe(x => console.log(x));
}
