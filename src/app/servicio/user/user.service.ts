import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthLoginService } from '../auth-login.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:8080/auth/user';

  constructor(
    private http: HttpClient,
    private authLoginService: AuthLoginService
  ) { }

  verPerfil(): Observable<any> {
    const userName = this.authLoginService.getUserName();
    const perfil = this.http.get(`${this.url}/${userName}`);
    console.log(perfil);
    return perfil;
  }



  editarPerfil(user: any): Observable<any> {
    const userId = this.authLoginService.getUserId();
    console.log('userId:', userId);
    // Aquí usas el userId para hacer la petición PUT y actualizar el perfil
    return this.http.put(`${this.url}/user/edit/${userId}`, user);
  }


}
