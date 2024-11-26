import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Importa FormsModule
//import { DropZoneImgAppComponent } from '../../img-drop/drop-zone-img-app/drop-zone-img-app.component';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Importa FormsModule y ReactiveFormsModule
import { Usuario } from '../../model/usuario';
import { UsuariosService } from '../../servicio/usuarios.service';


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],  // Añade FormsModule a los imports
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']  // Corregido "styleUrl" por "styleUrls"
})
export class RegistroComponent {

  // usa la interfaz Usuario
  usuario:Usuario = {
    name: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    phone: '',
    direction: '',
    district:'',
  };

  constructor(
    private router: Router,
    private usuariosService: UsuariosService

  ) {}

   navegar(direccion: string) {
    this.router.navigate([direccion]); // se navega a la ruta que se le pase por parametro
   }
 

  registrar(){

    const nuevoUsuario : Usuario = {
      name: this.usuario.name,
      lastName: this.usuario.lastName,
      phone: this.usuario.phone,
      direction: this.usuario.direction,
      district: this.usuario.district,
      email: this.usuario.email,
      password: this.usuario.password,
      userName: this.usuario.email,
    }
    this.usuariosService.registrarUsuario(nuevoUsuario).subscribe((data: any) => {
      console.log("este es el nuevo usuario",data);
    });

    console.log(nuevoUsuario)
    alert('Usuario registrado con éxito');
      this.navegar('login');
  }
}
