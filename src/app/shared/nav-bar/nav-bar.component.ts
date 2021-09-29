import { Component, OnInit } from '@angular/core';
interface IMenuItem {
  nombre: string;
  url: string;
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: []
})
export class NavBarComponent implements OnInit {
  menusList: IMenuItem[] = [
    { nombre: 'Usuarios', url: './usuarios' },
    { nombre: 'Libros', url: './libros' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
