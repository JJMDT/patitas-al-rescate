import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor( private router:Router) { 
    this.router.events.subscribe((e) => {
      if(e instanceof NavigationEnd){
      switch(e.urlAfterRedirects){
        case "/home":
          this.seleccionado = [true,false,false];
          break;
        case "/anuncios":
          this.seleccionado = [false,true,false];
          break;
          case "/nosotros":
          this.seleccionado = [false,false,true];
          break;
          default:
          this.seleccionado = [false,false,false];
          break;
      }}
  })}


  navegar(direccion :string){
    this.router.navigate([direccion]); // se navega a la ruta que se le pase por parametro
  }
  
  seleccionado = [false,false,false]
  

  
  
}

