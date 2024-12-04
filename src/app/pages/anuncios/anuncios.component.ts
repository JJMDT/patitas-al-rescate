import { Component, OnInit } from '@angular/core';
import { ServicioMascotasService } from '../../servicio/servicio-mascotas.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthLoginService } from '../../servicio/auth-login.service';
@Component({
  selector: 'app-anuncios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css']
})
export class AnunciosComponent implements OnInit {

  publicaciones: any[] = []; // Lista de publicaciones
  mostrarModal: boolean = false;
  publicacionSeleccionada: any = null;
  

  constructor(
    private servicioMascotasService: ServicioMascotasService,
    private router: Router,
    public authLoginService: AuthLoginService
  ) {}

  ngOnInit(): void {
    this.servicioMascotasService.verPublicaciones().subscribe({
      next: (response: any) => {
        console.log('Publicaciones obtenidas:', response);
        this.publicaciones = response.data || []; // Extraer el array de publicaciones

      },
      error: (error: any) => {
        console.error('Error al obtener publicaciones:', error);
      }
    });
  }

  // Función para abrir el modal y asignar la publicación seleccionada
  
  abrirModal(publicacion: any): void {
    console.log('Publicación seleccionada:', publicacion);
    this.publicacionSeleccionada = publicacion;
    this.mostrarModal = true;
  }
  cerrarModal(): void {
    this.mostrarModal = false;
    this.publicacionSeleccionada = null;
  }

  // Función para redirigir a la página de publicación
  navegar(direccion: string) {
    this.router.navigate([direccion]); // se navega a la ruta que se le pase por parametro
  }
  
}