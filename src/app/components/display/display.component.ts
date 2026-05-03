import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  template: `<div class="display">{{ value || 0 }}</div>`,
  styles: [`
    .display {
      background: black;
      color: white;
      padding: 20px;
      font-size: 2em;
      text-align: right;
      border-radius: 5px;
      margin-bottom: 10px;
    }
  `]
})
export class DisplayComponent {
  @Input() value: string = '';
}