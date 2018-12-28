import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class HttpService {

//   constructor() { }
// }

@Injectable()

export class HttpService {
  constructor(private _http: HttpClient){
    this.getTask();
    this.getBooks();
  }

  getTask(){
    let tempObservable = this._http.get('/api/v1/authors');
    tempObservable.subscribe(data => console.log('Got our tasks', data));
  }

  getBooks(){
    let observable = this._http.get('/api/v1/books');
    observable.subscribe(data => console.log('Got your books', data));
  }
}
