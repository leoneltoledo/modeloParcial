import { Component, OnInit } from '@angular/core';
import { TablaPeliculaComponent } from '../componentes/tabla-pelicula/tabla-pelicula.component';
import { Pelicula } from '../clases/pelicula';

@Component({
  selector: 'app-busqueda-peliculas',
  templateUrl: './busqueda-peliculas.component.html',
  styleUrls: ['./busqueda-peliculas.component.css']
})
export class BusquedaPeliculasComponent implements OnInit {

  listadoPeliculas: Pelicula[];
  peliculaSeleccionada: Pelicula;
  constructor() {
    this.listadoPeliculas = [
      { id: 1, nombre: "IT", tipo: "Terror", fechaEstreno: new Date() ,cantidadPublico: 3000000, foto: 'https://endiklarsson.files.wordpress.com/2018/02/db_posters_35927.jpg' },
      { id: 2, nombre: 'Tonto y re tonto', tipo: 'Comedia', fechaEstreno: new Date() ,cantidadPublico: 3000000, foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRydn64nhpc9neGz9IhWwBSd6nSb6vnUFPrnzWlaLbJfk3Q8IMt' },
      { id: 3, nombre: 'La la land', tipo: 'Musical', fechaEstreno: new Date() ,cantidadPublico: 3000000, foto: 'https://es.web.img3.acsta.net/pictures/16/11/30/17/44/581119.jpg' }
    ];
   }

  ngOnInit(): void {
  }

  cargarPeliculaSeleccionada(pelicula){
    this.peliculaSeleccionada = pelicula;
    console.info(this.peliculaSeleccionada);
  }

  cargarNuevaPelicula(pelicula: Pelicula){
    this.listadoPeliculas.push(pelicula);
  }

}
