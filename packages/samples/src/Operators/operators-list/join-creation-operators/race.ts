import { race, interval, timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';

export const raceOperator = () => {
  // const obs1 = interval(1000).pipe(mapTo('fast one'));
  // const obs2 = interval(3000).pipe(mapTo('medium one'));
  // const obs3 = interval(5000).pipe(mapTo('slow one'));

  const obs1 = timer(0, 2000).pipe(mapTo('fast one'));
  const obs2 = timer(500, 1500).pipe(mapTo('medium one'));
  const obs3 = timer(1000, 1000).pipe(mapTo('slow one'));
  
  race(obs3, obs1, obs2)
  .subscribe(
    winner => console.log(winner)
  );
}