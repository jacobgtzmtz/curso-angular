import { Component, OnInit } from '@angular/core';
import { ILibro } from 'src/app/models/ilibro';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styles: [
  ]
})
export class LibrosComponent implements OnInit {
  public listaDeLibros: ILibro[] = [];

  constructor(private $librosService: LibrosService) { }

  ngOnInit(): void {
    this.obtenerLibros();
    console.log(this.listaDeLibros);
  }

  /**
   * getAllBooks
   */
  public obtenerLibros() {
    this.$librosService.obtenerLibros().subscribe(libros => {
      libros.forEach((libros) => {
        this.listaDeLibros.push(libros);
      });
    })
  }

}
