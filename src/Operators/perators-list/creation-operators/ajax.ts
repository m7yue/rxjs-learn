import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export const ajaxOperator = () => {
  const obsAjax = 
    ajax(`https://api.github.com/users?per_page=7`)
    .pipe(
      map(userResponse => {
        console.log('users: ', userResponse)
        return userResponse
      }),
      catchError(error => {
        console.log('error: ', error);
        return of(error);
      })
    );

  obsAjax.subscribe()
    
  const obsAjaxGet = 
    ajax.getJSON(`https://api.github.com/users?per_page=5`)
    .pipe(
      map(userResponse => console.log('users: ', userResponse)),
      catchError(error => {
        console.log('error: ', error);
        return of(error);
      })
    );

  obsAjaxGet.subscribe()

  const obsAjaxPost = ajax({
    url: 'https://httpbin.org/delay/2',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'rxjs-custom-header': 'Rxjs'
    },
    body: {
      rxjs: 'Hello World!'
    }
  }).pipe(
    map(response => console.log('response: ', response)),
    catchError(error => {
      console.log('error: ', error);
      return of(error);
    })
  );

  obsAjaxPost.subscribe()
}