import { Component } from '@angular/core';
import { IMenuItem } from 'src/app/models/imenu-item';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [],
})
export class NavBarComponent {
  menusList: IMenuItem[] = [
    { nombre: 'Usuarios', url: './usuarios' },
    { nombre: 'Libros', url: './libros' },
  ];
}
