import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { DisplayComponent } from './components/display/display.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
// funciòn decoradora
@NgModule({
  // Declaracion de componentes de este modulo
  declarations: [
    AppComponent,
    ButtonComponent,
    DisplayComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule
    // importacion de modulos que queremos utilizar
  ],
  providers: [],
  // es una propiedad que solo va en el modulo principal
  // indica cual es el componente inicial
  bootstrap: [AppComponent]
})
export class AppModule { }
