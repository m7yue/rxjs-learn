import { fromEventPattern } from 'rxjs';

export const fromEventPatternOperators = () => {

  function addClickHandler(handler: (this: Document, ev: MouseEvent) => any) {
    document.addEventListener('click', handler);
  }
  
  function removeClickHandler(handler: (this: Document, ev: MouseEvent) => any) {
    document.removeEventListener('click', handler);
  }
  
  const clicks = fromEventPattern(
    addClickHandler,
    removeClickHandler
  );
  clicks.subscribe(x => console.log(x));

}