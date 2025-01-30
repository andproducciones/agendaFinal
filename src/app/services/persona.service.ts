import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< Updated upstream
import { Observable } from 'rxjs/internal/Observable';
=======
import { Observable } from 'rxjs';
>>>>>>> Stashed changes

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
private API_URL = 'https://agenda.ioasystem.com/persona.php'; // Cambia esto a la URL de tu backend

<<<<<<< Updated upstream
  constructor(private http: HttpClient) { }

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
=======
  
  constructor() {}

>>>>>>> Stashed changes
}
