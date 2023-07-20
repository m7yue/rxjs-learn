import { interval, animationFrameScheduler } from 'rxjs';
import { observeOn } from 'rxjs/operators';


export const animationFrameSchedulerDemo = () => {
  const someDiv: HTMLDivElement = document.querySelector("DIV")!;
  someDiv.style.background = 'yellow'
  console.log(someDiv)
  const intervals = interval(100);

  // Ensure values in subscribe are called just before browser repaint.
  intervals.pipe(
    observeOn(animationFrameScheduler),
  )                                               
  .subscribe(val => {
    console.log(val)
    someDiv.style.height = val + 'px';
  });
}

// 表示在浏览器的 requestAnimationFrame 中执行任务。