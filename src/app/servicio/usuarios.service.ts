import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Esto asegura que el servicio esté disponible globalmente
})
export class UsuariosService {
  private apiUrl = 'http://localhost:8080/auth'; // Reemplaza con tu API

  constructor(private http: HttpClient) {}

  verTodo(): Observable<any> {
    const users = this.http.get(`${this.apiUrl}/all`);
    console.log(users);
    return users;
  }


  registrarUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, usuario);
  }
}



// http://localhost:8080/auth/create // POST
// http://localhost:8080/auth/user/all // GET
