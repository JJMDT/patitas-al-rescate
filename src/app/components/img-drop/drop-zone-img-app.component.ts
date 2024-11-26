import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SubirImagenService } from '../../servicio/subir-imagen.service';

@Component({
  selector: 'app-drop-zone-img-app',
  standalone: true,
  imports: [NgxDropzoneModule,CommonModule],
  templateUrl: './drop-zone-img-app.component.html',
  styleUrl: './drop-zone-img-app.component.css'
})
export class DropZoneImgAppComponent {

  constructor(
    private subirImagenService: SubirImagenService
  ) { }

  files: File[] = [];

onSelect(event : any) {
  console.log(event);
  this.files.push(...event.addedFiles);
}

onRemove(event : any) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}



subirImagen(): Promise<string> {
  return new Promise((resolve, reject) => {
    if (this.files.length === 0) {
      reject('No hay archivos para subir');
      return;
    }
    const fileData = this.files[0];
    const data = new FormData();
    data.append('file', fileData);
    data.append('upload_preset', 'cloudinary-mascotas');
    data.append('cloud_name', 'jjmdt');

    this.subirImagenService.uploadImg(data).subscribe({
      next: (response: any) => {
        console.log(response);
        alert('Imagen subida correctamente');
        resolve(response.url); // Resuelve la promesa con la URL de la imagen subida
      },
      error: (error) => {
        console.log(error);
        reject(error); // Rechaza la promesa en caso de error
      }
    });
  });
}
}