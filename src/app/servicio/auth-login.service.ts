import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {
  private userName: string = '';
  private apiUrl = '//localhost:8080/auth';

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  inicioSesion(email: string, password: string): Observable<any> {
    const datos = { userName: email, password: password };
    this.userName = email;
    localStorage.setItem('userName', this.userName);

    return this.http.post(`${this.apiUrl}/login`, datos).pipe(
      catchError((error) => {
        console.error('Error en inicio de sesión:', error);
        return throwError(() => new Error('Inicio de sesión fallido.'));
      })
    );
  }

  saveToken(token: string): void {
    if (this.isBrowser() && token) {
      localStorage.setItem('authToken', token);
    }
  }

  getToken(): string | null {
    if (this.isBrowser()) {
      return localStorage.getItem('authToken');
    }
    return null;
  }

  logout(): void {
    if (this.isBrowser()) {
      Swal.fire({
        title: "¿Desea cerrar sesión?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Cerrar sesión",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem('authToken');
          localStorage.removeItem('userName');
          console.log('Sesión cerrada. Token eliminado.');
          Swal.fire({
            title: "Sesión cerrada con éxito",
            icon: "success"
          });
        }
      });
    }
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return !!token;
  }

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  getUserName(): string {
    if (this.isBrowser()) {
      return localStorage.getItem('userName') || '';
    }
    return '';
  }
}
