import { Component, OnChanges } from '@angular/core';
import { ng2Select } from './shared/ng2-select';

import { Zippy } from './shared/zippy';

@Component({
  selector: 'my-app',
  template: `
    
     <ng2-select [datalist]="options" [(ngModel)]="hello[1].name" class="sample" ></ng2-select>

    <ng2-select [datalist]="gender" [(ngModel)]="hello[0].name" ></ng2-select>


   

  `,
  styles:[
    `
      div.cont{
        width: 10em;
        float:left;
      }

      .sample{
        border:none;
      }
    `
  ]
})
export class AppComponent { 
  options: Array<any> = ["mark","aris","michael","gel","tian","bits","anna","ailee","ariston","naruto","sasukee","revenge"];
  gender: Array<any> = ["Female","Male"];
  hello: Array<any>  = 
  [
    {
      "name": "markaris",
      "age": 12
    },
    {
      "name": "mike",
      "age": 23
    }
  ]
}
