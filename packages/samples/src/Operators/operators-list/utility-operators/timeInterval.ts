import { interval, timeInterval } from 'rxjs'


export const timeIntervalOperator = () => {
  const seconds = interval(1000);

  seconds.pipe(
    timeInterval(),
  )
  .subscribe(
    {
      next: value => console.log(value),
      error: err => console.log(err),
    }  
  );
}