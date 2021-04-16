import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-alta-pelicula',
  templateUrl: './alta-pelicula.component.html',
  styleUrls: ['./alta-pelicula.component.css']
})
export class AltaPeliculaComponent implements OnInit {
  peliculaNueva: Pelicula;
  @Output() creacionNuevaPeliculaEvento: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  guardarNuevaPelicula(){
    this.creacionNuevaPeliculaEvento.emit(this.peliculaNueva);
    this.peliculaNueva = null;
  }

  hacerNuevaPelicula(){
    this.peliculaNueva = new Pelicula();
  }

}
