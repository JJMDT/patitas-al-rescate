import { Routes } from '@angular/router';
// importar todos los componentes que se van a usar en las rutas
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AnunciosComponent } from './pages/anuncios/anuncios.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { CrearAnuncioComponent } from './pages/crear-anuncio/crear-anuncio.component';



export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'anuncios', component: AnunciosComponent},
    {path: 'nosotros' , component: NosotrosComponent},
    {path: 'registro' , component: RegistroComponent},
    {path: 'usuarios' , component: AnunciosComponent},
    {path: 'crear-anuncio' , component: CrearAnuncioComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];
