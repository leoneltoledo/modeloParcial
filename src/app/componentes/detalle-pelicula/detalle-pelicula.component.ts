import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

 @Input() peliculaParaMostrar: Pelicula;
  constructor() {
    this.peliculaParaMostrar = new Pelicula();
    /*this.peliculaParaMostrar.nombre = 'SPIDERMAN'
    this.peliculaParaMostrar.tipo = 'ACCION'
    this.peliculaParaMostrar.fechaEstreno = new Date();
    this.peliculaParaMostrar.cantidadPublico = 3000000;*/
   }

  ngOnInit(): void {
  }

}
