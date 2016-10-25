import { Component, Input, Output,EventEmitter, OnInit, OnChanges, ElementRef,forwardRef, ExistingProvider } from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';

const SELECT_VALUE_ACCESSOR: ExistingProvider = { 
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ng2Select),
    multi: true
};

@Component({
    selector: 'ng2-select',
    template: 
    `
        <div class="select-wrap">
            <div class="text-wrap">
                <input type="text" id="text-inp" (click)="visible = !visible" [value]="dropValue" />
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
        }
        div.select-wrap{
            width:50%%;
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
    `],
     providers: [
        SELECT_VALUE_ACCESSOR
    ]
})

export class ng2Select implements OnInit{
    @Input() datalist: Array<any>;
    @Input() data : any;

    visible: boolean = false;
    lists: Array<any>;

    dropValue:string = "";
    listArray: Array<string> = ["mark","aris","michael","gel","tian","bits","anna","ailee","ariston","naruto","sasukee","revenge"]
   
    onChange = (_: any) => {};
    onTouched = () => {};

    ngOnInit()
    {
        this.initializeData();
    }

    constructor(public elem:ElementRef)
    {
        let doc = document.getElementsByTagName('html')[0];
        doc.addEventListener('click', (event) => {
        if (this.visible && event.target && this.elem.nativeElement !== event.target && !this.elem.nativeElement.contains(event.target)) {
            this.visible = false;
            }
        }, false);
    }

    initializeData()
    {
        this.lists = this.datalist;
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

    writeValue(value:any)
    {
        this.dropValue = value;
    }

    registerOnChange(fn: (_: any) => void) {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void) {
        this.onTouched = fn;
    }


 
}