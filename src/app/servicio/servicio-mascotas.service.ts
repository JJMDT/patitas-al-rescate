import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicioMascotasService {
  // url de la api que nos tiene que pasar edgar desde backend
  private url = 'http://localhost:8080/publication';


  constructor(
    private http: HttpClient,

  ) { }

  verPublicaciones(): Observable<any> {
    const publicaciones  = this.http.get(`${this.url}/all`);
    console.log(publicaciones);
    return publicaciones;
  }

  crearPublicacion(datos : any): Observable<any>{
    return this.http.post(`${this.url}/create`, datos);
  }

}

// http://localhost:8080/publication/create // POST
// http://localhost:8080/publication/all // GET
// http://localhost:8080/publication/update/{id} // PUT