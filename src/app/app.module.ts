import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { LibrosComponent } from './views/libros/libros.component';
import { UsuariosComponent } from './views/usuarios/usuarios.component';
import { LibroDetallesComponent } from './views/libros/libro-detalles/libro-detalles.component';
import { UsuarioDetallesComponent } from './views/usuarios/usuario-detalles/usuario-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LibrosComponent,
    UsuariosComponent,
    LibroDetallesComponent,
    UsuarioDetallesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
