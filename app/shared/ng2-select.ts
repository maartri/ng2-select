import { Component, Input, Output,EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'ng2-select',
    template: 
    `
        <div class="select-wrap">
            <div class="text-wrap">
                <input type="text" id="text-inp" (window:click)="onWindowClick($event)" [value]="dropValue" />
            </div>
            <ul *ngIf="visible" (close)="open" >
                <li *ngFor="let list of lists" (click)="selectValue(list)">{{list}}</li>
            </ul>
        </div>
    `,
    styles:[`
        div.text-wrap{
            width:100%;
            border:1px solid black;
            max-width:800px;   
        }
        div.select-wrap{
            width:100%;
            max-width:800px;
            float:left;
        }

        div.select-wrap input[type="text"]{
            width:100%;
            border:none;
            padding:4px;
        }

        ul {
            padding:0;
            margin:0;
            border-top:none;
            border:1px solid #aaaaaa;            
            overflow:auto;
            width:100%;
            max-height: 10em;
        }
        ul li{
            list-style:none;
            padding:5px;
            line-height:1.5em;
        }
        ul li:hover{
            background-color:#62BAE9;
            color:#fff;
            cursor:pointer;
        }
    `]
})

export class ng2Select implements OnInit{
    @Input() data: Array<any>;

    visible: boolean = false;
    lists: Array<any>;

    dropValue:string = "";
    listArray: Array<string> = ["mark","aris","michael","gel","tian","bits","anna","ailee","ariston","naruto","sasukee","revenge"]
   
    ngOnInit()
    {
        this.initializeData();
    }

    constructor()
    {

    }

    initializeData()
    {
        this.lists = this.data;
    }

    onWindowClick(event:any)
    {
        if(event.target.getAttribute("id") == "text-inp"){
           this.visible = !this.visible;
        } else{
            this.visible = false
        }  
    }

    selectValue(value: any){        
        this.dropValue = value;
    }



 
}