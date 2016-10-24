import { Component } from '@angular/core';
import { ng2Select } from './shared/ng2-select';

import { Zippy } from './shared/zippy';

@Component({
  selector: 'my-app',
  template: `
    <ng2-select [data]="options" ></ng2-select>
  `,
  styles:[
    `
      div.cont{
        width: 10em;
        float:left;
      }
    `
  ]
})
export class AppComponent { 
  options: Array<any> = ["mark","aris","michael","gel","tian","bits","anna","ailee","ariston","naruto","sasukee","revenge"];

}
