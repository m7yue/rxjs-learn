import { of, ErrorNotification } from 'rxjs';
import { materialize, map } from 'rxjs/operators';

export const materializeOperator = () => {
  const letters = of('a', 'b', 13, 'd');
  const upperCase = letters.pipe(
    // map((x: any) => typeof x === 'string' ? x.toUpperCase() : x)
    //有错误的情况， 会生成 ErrorNotification
    map((x: any) => x.toUpperCase())
  );
  
  const materialized = upperCase.pipe(materialize());
  materialized.subscribe(x => console.log(x));
}