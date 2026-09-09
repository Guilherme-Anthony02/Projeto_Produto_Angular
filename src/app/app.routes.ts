import { Routes } from '@angular/router';
import { HomeComponent } from './component/home-component/home-component';
import { CadastroProduto } from './component/cadastro-produto/cadastro-produto';
import { ListaProduto } from './component/lista-produto/lista-produto';

export const routes: Routes = [
    {
        path: "",
        redirectTo:"/home",
        pathMatch: "full"
    },

    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "cadastroproduto",
        component: CadastroProduto
    },
    {
        path: "cadastroproduto/:id",
        component: CadastroProduto
    },
    {
        path: "listaproduto",
        component: ListaProduto
    }
];
