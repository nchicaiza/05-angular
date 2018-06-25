import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {
  // Interpolacion
  titulo = 'Web';
  usuario = {
    nombre: 'Adrian',
    apellido: 'Eguez'
  };
  arregloNumeros = [5, 4, 3, 2, 1];
  mostrarTitulo = true;
}

