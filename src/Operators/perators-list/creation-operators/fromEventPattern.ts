import { fromEventPattern } from 'rxjs';

// 添加事件，接触事件
export const fromEventPatternOperator = () => {

  function addClickHandler(handler: (this: Document, ev: MouseEvent) => any) {
    document.addEventListener('click', handler);
    return 7
  }
  
  function removeClickHandler(handler: (this: Document, ev: MouseEvent) => any, signal?: any) {
    console.log(signal)
    document.removeEventListener('click', handler);
  }
  
  const clicks = fromEventPattern(
    addClickHandler,
    removeClickHandler
  );
  const sub =  clicks.subscribe(x => console.log(x));

  setTimeout(() => {
    sub.unsubscribe()
  }, 3000);
}