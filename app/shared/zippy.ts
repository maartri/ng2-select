import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'zippy',
  template: `
  <div class="zippy">
    <div (click)="toggle()">Toggle</div>
    <div [hidden]="visible">
      <ng-content></ng-content>
    </div>
 </div>`})
export class Zippy {

  visible: boolean = false;
  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();

  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      this.open.emit(false);
    } else {
      this.close.emit(true);
    }
  }

}