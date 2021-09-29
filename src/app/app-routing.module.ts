import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LibrosComponent } from './libros/libros/libros.component';
import { UsuariosComponent } from './usuarios/usuarios/usuarios.component';

const routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'libros', component: LibrosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
