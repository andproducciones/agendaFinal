import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private API_URL = 'https://agenda.ioasystem.com/persona.php'; // Cambia esto a la URL de tu backend

  constructor(private http: HttpClient) { }

  // Método para iniciar sesión con Headers personalizados
  login(cedula: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE'
    });

    return this.http.post(this.API_URL, {
      accion: 'login',
      cedula,
      password
    }, { headers });
  }


  registrar(datos: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.post(this.API_URL, { accion: 'insertar', ...datos }, { headers });
  }
  recuperarPassword(correo: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.post(this.API_URL, { accion: 'recover_pass', correo }, { headers });
  }

  perfil(codigo: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.post(this.API_URL, { accion: 'dato', codigo }, { headers });
  }
}
