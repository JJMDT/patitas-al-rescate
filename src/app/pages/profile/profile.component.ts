import { Component } from '@angular/core';
import { UserService } from '../../servicio/user/user.service';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user:any;
  mostrarModal: boolean = false;


  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.verPerfil().subscribe({
      next: (response: any) => {
        this.user = response;
        console.log('Perfil obtenido es :', this.user);
      },
      error: (error: any) => {
        console.error('Error al obtener perfil:', error);
      }
    });
  }


  guardarCambios(): void {
    // Lógica para guardar los cambios
    console.log('Cambios guardados:', this.user);
    this.mostrarModal = false; // Cerrar el modal después de guardar los cambios
  }
}
