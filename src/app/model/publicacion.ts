import { Usuario } from './usuario';
export interface Publicacion {
    name: string;
    type: string;
    race: string;
    sex: string;
    sizePet: string;
    image: string;
    district: string;
    direction: string;
    dateLost: string;
    isLost: boolean;
    description: string;
    userName: string;
    user?: Usuario;
}

// linea 54 publicacion controller 
// linea 58 publicacion controller
//http://localhost:8080/auth/user/:userName