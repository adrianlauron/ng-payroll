import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { NavBars } from './app.navbar';
import { Body } from './app.body';
import { EmployeeComponent } from './app.employees.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, NavBars, Body, EmployeeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
