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
  userSelected: any = null;


  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.verPerfil().subscribe({
      next: (response: any) => {
        this.user = response;
      },
      error: (error: any) => {
        console.error('Error al obtener perfil:', error);
      }
    });
  }

  abrirModal(user: any): void {
    this.mostrarModal = true;
    this.userSelected = user;
  }
  cerrarModal(): void {
    this.mostrarModal = false;
    this.userSelected = null;
  }


  guardarCambios(): void {
    // Lógica para guardar los cambios
    this.mostrarModal = false; // Cerrar el modal después de guardar los cambios
  }
}
