import { queueScheduler } from 'rxjs';

export const queueSchedulerDemo = () => {
  queueScheduler.schedule(() => {
    queueScheduler.schedule(() => console.log('second'));
  
    console.log('first');
  });
}
