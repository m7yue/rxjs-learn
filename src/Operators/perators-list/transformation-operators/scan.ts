import { interval, of } from 'rxjs';
import { scan, map, startWith } from 'rxjs/operators';

// It's like reduce, but emits the current accumulation state after each update
export const scanOperator = () => {
  const numbers$ = of(1, 2, 3);

  // numbers$
  //   .pipe(
  //     scan((total, n) => total + n, 7),
  //   )
  //   .subscribe(console.log);


  const firstTwoFibs = [0, 1];
  const fibonnaci$ = interval(1000).pipe(
    scan(([a, b]) => [b, a + b], firstTwoFibs),
    map(([, n]) => n),
    startWith(...firstTwoFibs)
  );
    
  fibonnaci$.subscribe(console.log);
}
