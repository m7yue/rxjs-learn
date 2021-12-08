import { iif, of } from 'rxjs';

export const iifOperator = () => {
  let subscribeToFirst: boolean;

  const firstOrSecond = iif(
    () => subscribeToFirst,
    of('first'),
    of('second'),
  );
   
  subscribeToFirst = true;
  firstOrSecond.subscribe(value => console.log(value));
   
  subscribeToFirst = true;
  firstOrSecond.subscribe(value => console.log(value));

  subscribeToFirst = false;
  firstOrSecond.subscribe(value => console.log(value));
}