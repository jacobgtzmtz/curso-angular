import { HttpClient } from '@angular/common/http';
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
   * getAllLibros
   */
  public obtenerLibros(): Observable<ILibro[]> {
    return this.$http.get<ILibro[]>(this.EndPoint);
  }
}
