import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavBars } from './app.navbar';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, NavBars ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
