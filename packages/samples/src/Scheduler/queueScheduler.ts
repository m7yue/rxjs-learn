import { queueScheduler } from 'rxjs';

export const queueSchedulerDemo = () => {
  queueScheduler.schedule(() => {
    queueScheduler.schedule(() => console.log('second'));
  
    console.log('first');
  });
}

// 示在 event loop 的任务队列中执行任务，时间间隔为 0。