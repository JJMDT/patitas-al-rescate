import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./pages/login/login.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./pages/home/home.component";
import { AnunciosComponent } from './pages/anuncios/anuncios.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { FooterComponent } from "./components/footer/footer.component";
import { RegistroComponent } from './pages/registro/registro.component';
import { DropZoneImgAppComponent } from './components/img-drop//drop-zone-img-app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    DropZoneImgAppComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-mascotas';
}
