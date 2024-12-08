import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdopcionService {
  private baseUrl = 'https://huachitos.cl/api'; // URL base de la API

  constructor(private http: HttpClient) {}

  // Obtener lista de animales para adopción
  getAnimales(region: string, comuna: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/animales`, {
      params: { region, comuna },
    });
  }
}
