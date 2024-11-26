import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AuthLoginService } from '../../servicio/auth-login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  userName: string = '';
  password: string = '';
  
  constructor(
    private router: Router,
    private authService: AuthLoginService
  ) {}

  login(userName : string , password: string) {
    // Verifica que los campos no estén vacíos antes de intentar iniciar sesión
    if (!this.userName || !this.password) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Llama al servicio de autenticación
    this.authService.inicioSesion(this.userName, this.password).subscribe(
      (response) => {
        console.log('Login exitoso:', response);
        const token = response?.token;
        if(token){

          this.authService.saveToken(response.token); // Guarda el token en LocalStorage
          alert('¡Inicio de sesión exitoso!');
          this.router.navigate(['/home']); // Redirige a la página principal
        }
      },
      (error) => {
        console.error('Error al iniciar sesión:', error);
        alert(error.error.message || 'Credenciales incorrectas');
      }
    );
  }

  navegar(direccion: string) {
    this.router.navigate([direccion]); // se navega a la ruta que se le pase por parametro
  }
  
  // login(email: string, password: string) {
  //   console.log(email,password);
  //   if(email == 'jj@gmail.com' && password == '123456'){
      
  //     alert('Usuario logueado con éxito');
  //     this.navegar('home');
  //   }else{
  //     alert('Usuario o contraseña incorrectos');
  //   }
  // }
  



}
