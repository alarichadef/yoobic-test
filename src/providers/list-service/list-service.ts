import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ListServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListServiceProvider {
  apiUrl = 'https://pokeapi.co/api/v2/';
  data: any;
  constructor(public http: HttpClient) {
    console.log('Hello ListServiceProvider Provider');
  }
  load(ressource,num) {
  	  console.log('load function',num)
	  return new Promise(resolve => {
	    this.http.get(this.apiUrl + ressource + '/' + num +'/')
	      .subscribe(data => {
	        this.data = Array.of(data);
	        resolve(this.data);
	      });
	  });
	}

}
