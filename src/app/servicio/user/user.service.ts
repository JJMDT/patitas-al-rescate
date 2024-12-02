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
}
