import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'app';
  authors = []

  num: number;
  randNumber: number;
  str: string;
  first_name: string;

  snacks: string[];
  loggedIn: boolean;


  //
  constructor(private _httpService: HttpService){
  }


  //
  ngOnInit(){
    this.getDataFromService();
    this.num = 7;
    this.randNumber = Math.floor((Math.random() * 2) + 1);
    this.str = 'Hello Angular developer';
    this.first_name = 'Marco';

    this.snacks = ["vanilla latte with skim milk", "brushed suede", 'cookie'];
    this.loggedIn = true;

  }


  //
  getDataFromService(){
    let observable= this._httpService.getAuthors();
    observable.subscribe(data => {
      console.log('Got your authors', data);
      this.authors = data['authors'];
    })
  }


  onButtonClick(): void {
    console.log(`Click event is working`);
  }
  onButtonClickParam(first_name: string, last_name: string, country: string, birthdate: Date): void {
    console.log(`Click event is working with num param: ${[first_name, last_name, country, birthdate]}`);
    let observable = this._httpService.postToServer({data: first_name});
    observable.subscribe(data => console.log('Got our data', data));


  }
  onButtonClickParams(num: Number, str: String): void {
    console.log(`Click event is working with num param: ${num} and str param: ${str}`);
  }
  onButtonClickEvent(event: any): void {
    console.log(`Click event is working with event: ${event}`);
  }


}


