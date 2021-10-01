import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ILibro } from 'src/app/models/ilibro';
import { LibrosService } from 'src/app/services/libros.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-libro-detalles',
  templateUrl: './libro-detalles.component.html',
  styles: [],
})
export class LibroDetallesComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario!: NgForm;

  public idLibro: number = 0;
  public libroDetails: ILibro = {
    title: '',
    author: '',
    precio: 0,
    imageUrl: ''
  };
  public modoEdition: boolean = false;



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
    this.$librosService
      .actualizarLibro(this.idLibro, this.miFormulario.value)
      .subscribe((res) => {
       console.log(res);
       this.libroDetails = res;
      });
    this.modoEdition= false;
  }
}
