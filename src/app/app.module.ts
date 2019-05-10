import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormWithValidationsExplicitComponent } from './form-with-validations-explicit/form-with-validations-explicit.component';
import { HttpComponent } from './http/http.component';
import { RouterAppComponent } from './router-app/router-app.component';

const routes: Routes = [
{path : '', redirectTo: 'hello', pathMatch : 'full' },
{path : 'home', component : AppComponent},
{path : 'hello', component : HelloWorldComponent},
{path : 'list', component : UserListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserItemComponent,
    UserListComponent,
    UserFormComponent,
    FormWithValidationsExplicitComponent,
    HttpComponent,
    RouterAppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
  { provide : LocationStrategy, useClass : HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
