import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubirImagenService {

  constructor(
    private http : HttpClient
  ) { }

  url : string = 'https://api.cloudinary.com/v1_1/jjmdt/image/upload';
  
  uploadImg(data:any): Observable<any> {
    return this.http.post(this.url, data)
  }

}
