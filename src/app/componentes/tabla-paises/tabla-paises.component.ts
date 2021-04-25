import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pais } from 'src/app/clases/pais';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {
  @Input() countryList!:any[];
  @Output()eventoPaisSeleccionado:EventEmitter<any> = new EventEmitter<any>();
  constructor(
  ) { }

  ngOnInit(): void {
  }

  enviarEventoPaisSeleccionado(country: any){
    this.eventoPaisSeleccionado.emit(country);
  }

}
