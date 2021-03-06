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
    // this.getTask();
    // this.getBooks();
  }

  getAuthors(){ // makes http req
    // let tempObservable = this._http.get('/api/v1/authors');
    // tempObservable.subscribe(data => console.log('Got our tasks', data));
    return this._http.get('/api/v1/authors');
  }

  getBooks(){
    // let observable = this._http.get('/api/v1/books');
    // observable.subscribe(data => console.log('Got your books', data));
    return this._http.get('/api/v1/books');
  }

  postToServer(first_name){
    return this._http.post('/api/v1/authors', first_name);
    
  }
}
