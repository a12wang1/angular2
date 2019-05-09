import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  template: `
  <div class="ui rasied segment">
	  <h2 class="ui header"> Demo</h2>
	  <form #f="ngForm" 
		  (ngSubmit) = "onSubmit(f.value)"
		  class = "ui form">
		  <div class= "field">
			  <label for="skuInput">SKU</label>
			  <input type="text"
				  id="skuInput"
				  placeholder="SKU"
				  name="sku" ngModel>
			  </div>
			  <button type="submit" class="ui button">button</button>
		  </form>
	  </div>
  `,
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor() { }
  
  onSubmit(form: any): void {
	  console.log(form)
	  }
  	  
  ngOnInit() {
  }

}
