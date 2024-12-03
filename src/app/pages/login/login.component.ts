import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthLoginService } from '../../servicio/auth-login.service';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  userName: string = '';
  password: string = '';
  isPasswordVisible: boolean = false;

  
  constructor(
    private router: Router,
    private authService: AuthLoginService
  ) {}

  login(userName : string , password: string) {
    // Verifica que los campos no estén vacíos antes de intentar iniciar sesión
    if (!this.userName || !this.password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor, completa todos los campos.",
      });
      return;
    }

    // Llama al servicio de autenticación
    this.authService.inicioSesion(this.userName, this.password).subscribe(
      (response) => {
        const token = response?.token;
        if(token){

          this.authService.saveToken(response.token); // Guarda el token en LocalStorage
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login exitoso",
            showConfirmButton: false,
            timer: 1500
          });

          this.router.navigate(['/home']); // Redirige a la página principal
        }
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.error.message || 'Credenciales incorrectas',
        });
        
      }
    );
  }

  navegar(direccion: string) {
    this.router.navigate([direccion]); // se navega a la ruta que se le pase por parametro
  }
  
  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
