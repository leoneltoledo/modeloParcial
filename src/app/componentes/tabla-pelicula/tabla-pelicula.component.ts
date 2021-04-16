import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';


@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  @Input() listadoPeliculas: Pelicula[];
  @Output() PeliculaSeleccionadaEvento: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  seleccionPelicula(pelicula: Pelicula){
    console.info(pelicula);
    this.PeliculaSeleccionadaEvento.emit(pelicula);
  }

}
