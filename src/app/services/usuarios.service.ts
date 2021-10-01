import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario } from '../models/iusuario';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private EndPoint = 'http://localhost:3000/users';
  constructor(private $http: HttpClient) {}

  /**
   * obtenerUsarios
   */
  public obtenerUsarios(): Observable<IUsuario[]> {
    return this.$http.get<IUsuario[]>(this.EndPoint);
  }

  /**
   * obtenerUsuarioPorId
   * parameters: parametroId: number
   */
   public obtenerUsuarioPorId(parametroId: number): Observable<IUsuario> {
    return this.$http.get<IUsuario>(this.EndPoint + '/' + parametroId);
  }
}
