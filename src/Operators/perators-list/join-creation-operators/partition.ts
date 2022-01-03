import { of, partition, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

export const partitionOperator = () => {
  const observableValues = of(1, 2, 3, 4, 5, 6);
  // const observableValues = fromEvent(document, 'click')

  const [evens$, odds$] = partition(observableValues, (value, index) => index % 2 === 0);

  odds$.subscribe(x => console.log('odds', x));

  evens$.subscribe(x => console.log('evens', x));
}