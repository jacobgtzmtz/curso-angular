import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILibro } from '../models/ilibro';

@Injectable({
  providedIn: 'root',
})
export class LibrosService {
  private EndPoint = 'http://localhost:3000/books';
  constructor(private $http: HttpClient) {}

  /**
   * obtenerLibros
   */
  public obtenerLibros(): Observable<ILibro[]> {
    return this.$http.get<ILibro[]>(this.EndPoint);
  }

  /**
   * obtenerLibroPorId
   * parameters: parametroId: number
   */
  public obtenerLibroPorId(parametroId: number): Observable<ILibro> {
    return this.$http.get<ILibro>(this.EndPoint + '/' + parametroId);
  }

  /**
   * agregarLibro
   */
  public agregarLibro(nuevoLibro: ILibro) {
    return this.$http.post(this.EndPoint, nuevoLibro);
  }

  /**
   * agregarLibro
   */
  public actualizarLibro(parameterID: number, libroActualizado: ILibro): Observable<ILibro> {

    return this.$http.patch<ILibro>(this.EndPoint + '/' + parameterID, libroActualizado);
  }

  /**
   * borrarLibro
   * parameters: parametroId: number
   */
  public borrarLibro(parametroId: number) {
    return this.$http.delete(this.EndPoint + '/' + parametroId);
  }
}
