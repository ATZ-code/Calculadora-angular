import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {

  @Output() buttonClick = new EventEmitter<string>();

  buttons: string[] = [
    '7','8','9','/',
    '4','5','6','*',
    '1','2','3','-',
    '0','C','=','+'
  ];

  onClick(value: string) {
    this.buttonClick.emit(value);
  }
}