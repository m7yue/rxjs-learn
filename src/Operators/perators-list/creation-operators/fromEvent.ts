import { fromEvent } from 'rxjs';

export const fromEventOperators = () => {
  // const clicks = fromEvent(document, 'click');
  // clicks.subscribe(x => console.log(x));


  // Use addEventListener with capture option
  const clicksInDocument = fromEvent(document as any, 'click', {
    capture: false
  } as {
    capture?: boolean;
    passive?: boolean;
    once?: boolean;
  }); // note optional configuration parameter, which will be passed to addEventListener
  
  const el = document.createElement('div')
  el.style.height='100px'
  el.style.width='100px'
  el.style.background='red'
  document.body.appendChild(el)                                                      
  const clicksInDiv = fromEvent(el, 'click');
  
  clicksInDocument.subscribe(() => console.log('document'));
  clicksInDiv.subscribe(() => console.log('div'));
}