import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import { FormsModule } from '@angular/forms'
import { ng2Select } from './shared/ng2-select';
import { Zippy } from './shared/zippy';


@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ 
    AppComponent,
    ng2Select,
    Zippy
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
