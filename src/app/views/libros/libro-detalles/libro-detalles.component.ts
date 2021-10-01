import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ILibro } from 'src/app/models/ilibro';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-libro-detalles',
  templateUrl: './libro-detalles.component.html',
  styles: [],
})
export class LibroDetallesComponent implements OnInit {
  public idLibro: number = 0;
  public libroDetails!: ILibro;

  constructor(
    private $librosService: LibrosService,
    private activatedRoute: ActivatedRoute
  ) {}



  ngOnInit(): void {
    this.idLibro = this.activatedRoute.snapshot.params.id;
    this.obtenerLibroPorId();
  }

  /**
   * obtenerLibroPorId
   */
  public obtenerLibroPorId() {
    this.$librosService.obtenerLibroPorId(this.idLibro).subscribe((libro) => {
      this.libroDetails = libro;
    });
  }

  /**
   * agregarLibro
   */
  public agregarLibro() {
    const newLibro = {
      title: 'test',
      author: 'test',
      precio: 0,
      imageUrl: '',
    };
    this.$librosService.agregarLibro(newLibro).subscribe((res) => {
      console.log(res);
    });
  }

  /**
   * actualizarLibro
   */
  public actualizarLibro() {
    const libroActualizado = {
      title: 'tes updated',
      author: 'test updated',
      precio: 0,
      imageUrl: '',
    };
    const parameterId = 6;
    this.$librosService
      .actualizarLibro(parameterId, libroActualizado)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
