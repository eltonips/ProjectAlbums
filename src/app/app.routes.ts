import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ListaImagensComponent } from './pages/lista-imagens/lista-imagens.component';

export const routes: Routes = [
    {
        path: "", 
        redirectTo: "/login", 
        pathMatch: "full"
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "principal",
        component: PrincipalComponent
    },
    {
        path: "listaImagens",
        component: ListaImagensComponent
    }
];
