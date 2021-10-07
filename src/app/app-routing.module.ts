import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { BusquedaPeliculasComponent } from './busqueda-peliculas/busqueda-peliculas.component';
import { AltaPeliculaComponent } from './componentes/alta-pelicula/alta-pelicula.component';
import { AltaRepartidorComponent } from './pages/alta-repartidor/alta-repartidor.component';
import { PeliculaaltaComponent } from './pages/peliculaalta/peliculaalta.component';

const routes: Routes = [
  {path: '', component: BienvenidoComponent},
  {path: 'repartidor/alta', component: AltaRepartidorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
