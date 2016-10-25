"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var SELECT_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return ng2Select; }),
    multi: true
};
var ng2Select = (function () {
    function ng2Select(elem) {
        var _this = this;
        this.elem = elem;
        this.visible = false;
        this.dropValue = "";
        this.listArray = ["mark", "aris", "michael", "gel", "tian", "bits", "anna", "ailee", "ariston", "naruto", "sasukee", "revenge"];
        this.onChange = function (_) { };
        this.onTouched = function () { };
        var doc = document.getElementsByTagName('html')[0];
        doc.addEventListener('click', function (event) {
            if (_this.visible && event.target && _this.elem.nativeElement !== event.target && !_this.elem.nativeElement.contains(event.target)) {
                _this.visible = false;
            }
        }, false);
    }
    ng2Select.prototype.ngOnInit = function () {
        this.initializeData();
    };
    ng2Select.prototype.initializeData = function () {
        this.lists = this.datalist;
    };
    ng2Select.prototype.onWindowClick = function (event) {
        if (event.target.getAttribute("id") == "text-inp") {
            this.visible = !this.visible;
        }
        else {
            this.visible = false;
        }
    };
    ng2Select.prototype.selectValue = function (value) {
        this.dropValue = value;
    };
    ng2Select.prototype.writeValue = function (value) {
        this.dropValue = value;
    };
    ng2Select.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ng2Select.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ng2Select.prototype, "datalist", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ng2Select.prototype, "data", void 0);
    ng2Select = __decorate([
        core_1.Component({
            selector: 'ng2-select',
            template: "\n        <div class=\"select-wrap\">\n            <div class=\"text-wrap\">\n                <input type=\"text\" id=\"text-inp\" (click)=\"visible = !visible\" [value]=\"dropValue\" />\n            </div>\n            <ul *ngIf=\"visible\" (close)=\"open\" >\n                <li *ngFor=\"let list of lists\" (click)=\"selectValue(list)\">{{list}}</li>\n            </ul>\n        </div>\n    ",
            styles: ["\n        div.text-wrap{\n            width:100%;\n            border:1px solid black;\n        }\n        div.select-wrap{\n            width:50%%;\n            max-width:800px;\n            float:left;\n        }\n\n        div.select-wrap input[type=\"text\"]{\n            width:100%;\n            border:none;\n            padding:4px;\n        }\n\n        ul {\n            padding:0;\n            margin:0;\n            border-top:none;\n            border:1px solid #aaaaaa;            \n            overflow:auto;\n            width:100%;\n            max-height: 10em;\n        }\n        ul li{\n            list-style:none;\n            padding:5px;\n            line-height:1.5em;\n        }\n        ul li:hover{\n            background-color:#62BAE9;\n            color:#fff;\n            cursor:pointer;\n        }\n    "],
            providers: [
                SELECT_VALUE_ACCESSOR
            ]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ng2Select);
    return ng2Select;
}());
exports.ng2Select = ng2Select;
//# sourceMappingURL=ng2-select.js.map