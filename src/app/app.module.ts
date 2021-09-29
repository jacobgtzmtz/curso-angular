import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { LibrosComponent } from './libros/libros/libros.component';
import { UsuariosComponent } from './usuarios/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LibrosComponent,
    UsuariosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
