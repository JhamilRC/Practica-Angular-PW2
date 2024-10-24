import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AboutComponent } from './pages/about/about.component';
import { CardproductosComponent } from './conponents/cardproductos/cardproductos.component';
import { CardproductoComponent } from './conponents/cardproducto/cardproducto.component';
import { CardbuscadorComponent } from './conponents/cardbuscador/cardbuscador.component';

export const routes: Routes = [
    {path: 'Inicio', component: InicioComponent},
    {path: 'Acerca de', component: AboutComponent},
    {path: 'productos', component:  CardproductosComponent},
    {path: 'producto/:id', component: CardproductoComponent},
    {path: 'buscar/:termino', component: CardbuscadorComponent},
    {path: '**', component: InicioComponent},//para que regrese a la pagina inicio
];

// @NgModule({
//      imports: [RouterModule.forRoot(routes,{useHash: true})],
//      exports: [RouterModule]
//  })
// export class AppRoutingModule{}