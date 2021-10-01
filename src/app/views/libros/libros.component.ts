import { Component, OnInit } from '@angular/core';
import { ILibro } from 'src/app/models/ilibro';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styles: [],
})
export class LibrosComponent implements OnInit {
  public listaDeLibros: ILibro[] = [];

  constructor(private $librosService: LibrosService) {}

  ngOnInit(): void {
    this.obtenerLibros();
  }

  /**
   * obtenerLibros
   */
  public obtenerLibros() {
    this.$librosService.obtenerLibros().subscribe((libros) => {
      // libros.forEach((libros) => {
      //   this.listaDeLibros.push(libros);
      // });
      this.listaDeLibros = libros;
    });
  }

  /**
   * borrarLibro
id: number   */
  public borrarLibro(id: number = 0) {
    this.$librosService.borrarLibro(id).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.info('Sucedió un error al procesar esta petición: ' + error);
      }
    );
    this.obtenerLibros();
  }
}
