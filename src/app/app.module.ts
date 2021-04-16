import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaPeliculasComponent } from './busqueda-peliculas/busqueda-peliculas.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { TablaPeliculaComponent } from './componentes/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { AltaPeliculaComponent } from './componentes/alta-pelicula/alta-pelicula.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaPeliculasComponent,
    BienvenidoComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    AltaPeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
