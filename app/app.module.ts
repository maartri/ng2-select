import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import { ng2Select } from './shared/ng2-select';
import { Zippy } from './shared/zippy';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    ng2Select,
    Zippy
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
