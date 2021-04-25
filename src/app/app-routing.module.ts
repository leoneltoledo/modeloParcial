import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { BusquedaPeliculasComponent } from './busqueda-peliculas/busqueda-peliculas.component';
import { AltaActorComponent } from './pages/alta-actor/alta-actor.component';

const routes: Routes = [
  {path: '', component: BienvenidoComponent},
  {path: 'peliculas', component: BusquedaPeliculasComponent},
  {path: 'altaActor', component: AltaActorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
