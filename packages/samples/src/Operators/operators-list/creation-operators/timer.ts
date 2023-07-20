import { timer, of, interval } from 'rxjs';
import { concatMapTo, take, takeUntil } from 'rxjs/operators';

export const timerOperator = () => {
   // const takeFourNumbers = timer(2000, 1000).pipe(take(4)); // 2000 => 开始触发时间
   // takeFourNumbers.subscribe(x => console.log('Next: ', x));

   // const source = of(1, 2, 3);
   // const result = timer(3000).pipe(
   //   concatMapTo(source)
   // )
   // .subscribe(console.log);

   const currentDate = new Date();
   const startOfNextMinute = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      currentDate.getHours(),
      currentDate.getMinutes() + 1,
   )
   
   // // This could be any observable stream
   const source = interval(1000);
   
   const result = source.pipe(
      takeUntil(
         // 这里相当于一个延时器
         timer(startOfNextMinute)
      )
   );
   
   result.subscribe(console.log);
}