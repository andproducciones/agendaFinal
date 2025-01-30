import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private API_URL = 'https://tuservidor.com/api.php'; // Cambia esto por la URL del backend

  constructor(private http: HttpClient) {}

// Actualizar perfil del usuario
actualizarPerfil(usuario: any): Observable<any> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  return this.http.post(this.API_URL, { accion: 'actualizar_perfil', ...usuario }, { headers });
}
}
