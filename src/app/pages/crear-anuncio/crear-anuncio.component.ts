import { Component,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Importa FormsModule
import { Publicacion } from '../../model/publicacion';
import { DropZoneImgAppComponent } from '../../components/img-drop/drop-zone-img-app.component';
import { ServicioMascotasService } from '../../servicio/servicio-mascotas.service';

@Component({
  selector: 'app-crear-anuncio',
  standalone: true,
  imports: [FormsModule,DropZoneImgAppComponent],  // Añade FormsModule a los imports
  templateUrl: './crear-anuncio.component.html',
  styleUrl: './crear-anuncio.component.css'
})
export class CrearAnuncioComponent {

  @ViewChild('dropZone') dropZoneImgAppComponent!: DropZoneImgAppComponent;


  publicacion :Publicacion = {
    name: '',
    type: '',
    race: '',
    sex: '',
    sizePet: '',
    image: '',
    district: '',
    direction: '',
    dateLost: '',
    isLost: true,
    description: '',
    userName: '',
}
  

  constructor(
    private router: Router,
    private servicioMascotasService: ServicioMascotasService
    
  ) {}

  redirectToLogin() {
    this.router.navigate(['/crear-anuncio']);
  }

  navegar(direccion: string) {
    this.router.navigate([direccion]); // se navega a la ruta que se le pase por parametro
  }
  
  async publicarAnuncio(){
    const urlImagen = await this.dropZoneImgAppComponent.subirImagen();
    const nuevoAnuncio : Publicacion = { ...this.publicacion, image: urlImagen, userName: "admin@gmail.com" };
    
    console.log(nuevoAnuncio)

    this.servicioMascotasService.crearPublicacion(nuevoAnuncio).subscribe((data: any) => {
      console.log("esto es lo nuevo")
      console.log(data);
    });
    //this.dropZoneImgAppComponent.subirImagen();

    // enviar nuevoAnuncio a la base de datos
    alert('Anuncio publicado con éxito');
  
      this.navegar('/anuncios');
    
  }

  
}
