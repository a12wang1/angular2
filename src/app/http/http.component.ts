import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-http',
  template:`
  	<h2> Basic Request</h2>
	<button type = "button" (click) = "makeRequest()"> Make Request </button>
	<div *ngIf= "loading"> loading</div>
	<pre> {{data | json}}</pre>
  ` ,
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

	data : Object;
	loading : boolean;
  constructor(private http : Http ) { }

  ngOnInit() {
  }
	makeRequest(): void {
		this.loading = true;
	this.http.request('http://jsonplaceholder.typicode.com/posts/1')
	.subscribe((res: Response) => {
	console.log(res);
	this.data= res.json();	
	this.loading = false;
	});
	}

}
