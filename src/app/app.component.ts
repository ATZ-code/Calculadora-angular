import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  colorSeleccionado: string = 'orange';

  cambiarColor(color: string) {
    this.colorSeleccionado = color;
  }

}