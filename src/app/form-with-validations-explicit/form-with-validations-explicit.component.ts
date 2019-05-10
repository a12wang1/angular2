import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-with-validations-explicit',
  template: `
	<div class="ui raised segment">
		<h2 class="ui header">Demo Form: with validations</h2>
		<form [formGroup]="myForm"
			(ngSubmit)="onSubmit(myForm.value)"
			class="ui form">
			<div class="field"
				[class.error]="!sku.valid && sku.touched">
				<label for="skuInput">SKU</label>
				<input type="text"
					id="skuInput"
					placeholder="SKU"
					[formControl]="sku" >
					<div *ngIf="!sku.valid"
						class="ui error message">SKU is invalid</div>
					<div *ngIf="sku.hasError('requied')"
						class="ui error message">SKU is required</div>
				</div>
				<div *ngIf="!myForm.valid"
					class="ui error message"> Form is invalid</div>
					<button type="submit" class="ui button">Submit</button>
				</form>
			</div>
  `,
  styleUrls: ['./form-with-validations-explicit.component.css']
})
export class FormWithValidationsExplicitComponent implements OnInit {

			myForm : FormGroup;
			sku: AbstractControl;
			constructor(fb: FormBuilder) {
			this.myForm = fb.group({
			'sku': ['', Validators.required]
			})
			this.sku= this.myForm.controls['sku'];
			}
			onSubmit(value:string): void {
				console.log(value)
			}

  ngOnInit() {
  }

}
