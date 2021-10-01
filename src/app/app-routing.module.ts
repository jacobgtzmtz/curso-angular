import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibroDetallesComponent } from './views/libros/libro-detalles/libro-detalles.component';
import { LibrosComponent } from './views/libros/libros.component';
import { UsuarioDetallesComponent } from './views/usuarios/usuario-detalles/usuario-detalles.component';
import { UsuariosComponent } from './views/usuarios/usuarios.component';

const routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuarios/:id', component: UsuarioDetallesComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'libros/:id', component: LibroDetallesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
