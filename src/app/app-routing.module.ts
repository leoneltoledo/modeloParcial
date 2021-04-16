import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { BusquedaPeliculasComponent } from './busqueda-peliculas/busqueda-peliculas.component';

const routes: Routes = [
  {path: '', component: BienvenidoComponent},
  {path: 'peliculas', component: BusquedaPeliculasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
