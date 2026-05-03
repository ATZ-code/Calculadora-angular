import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  display: string = '';
  firstNumber: number | null = null;
  operator: string = '';

  handleClick(value: string) {

    
    if (!isNaN(Number(value))) {
      this.display += value;
      return;
    }

    
    if (value === 'C') {
      this.display = '';
      this.firstNumber = null;
      this.operator = '';
      return;
    }

    
    if (['+', '-', '*', '/'].includes(value)) {
      this.firstNumber = Number(this.display);
      this.operator = value;
      this.display = '';
      return;
    }

    
    if (value === '=') {
      const secondNumber = Number(this.display);

      if (this.firstNumber !== null) {
        switch (this.operator) {
          case '+':
            this.display = String(this.firstNumber + secondNumber);
            break;
          case '-':
            this.display = String(this.firstNumber - secondNumber);
            break;
          case '*':
            this.display = String(this.firstNumber * secondNumber);
            break;
          case '/':
            this.display = String(this.firstNumber / secondNumber);
            break;
        }
      }
    }
  }
}