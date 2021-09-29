import { Component, OnInit } from '@angular/core';
import { IUsuario } from 'src/app/models/iusuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [],
})
export class UsuariosComponent implements OnInit {
  public listaDeUsuarios: IUsuario[] = [];

  constructor(private $usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.obtenerLibros();
    console.log(this.listaDeUsuarios);
  }

  /**
   * getAllBooks
   */
  public obtenerLibros() {
    this.$usuariosService.obtenerUsarios().subscribe((usuarios) => {
      usuarios.forEach((usuario) => {
        this.listaDeUsuarios.push(usuario);
      });
    });
  }
}
