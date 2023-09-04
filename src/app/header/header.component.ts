import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

 @Output() onMenuBtnClick=new EventEmitter
  menuButtonClicked(){

    // to occur user defined event

    this.onMenuBtnClick.emit()


  }

}
