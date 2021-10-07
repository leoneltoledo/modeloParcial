import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaPeliculasComponent } from './busqueda-peliculas/busqueda-peliculas.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { TablaPeliculaComponent } from './componentes/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { AltaPeliculaComponent } from './componentes/alta-pelicula/alta-pelicula.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { AltaRepartidorComponent } from './pages/alta-repartidor/alta-repartidor.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from './services/country.service';
import { TablaActorComponent } from './componentes/tabla-actor/tabla-actor.component';
import { PeliculaaltaComponent } from './pages/peliculaalta/peliculaalta.component';
import { FormAltaRepartidorComponent } from './componentes/form-alta-repartidor/form-alta-repartidor.component';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaPeliculasComponent,
    BienvenidoComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    AltaPeliculaComponent,
    TablaPaisesComponent,
    AltaRepartidorComponent,
    TablaActorComponent,
    PeliculaaltaComponent,
    FormAltaRepartidorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    CountryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
