import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pais } from 'src/app/clases/pais';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {
  @Input() countryList!:any[];
  @Output()eventoPaisSeleccionado:EventEmitter<any> = new EventEmitter<any>();
  public seleccionoContinente: boolean = false;
  constructor(private countryService: CountryService,) { }

  ngOnInit(): void {
  }

  enviarEventoPaisSeleccionado(country: any){
    this.eventoPaisSeleccionado.emit(country);
  }

  africa(){
    this.seleccionoContinente = true;
    this.countryService.getAllCountrysAfrica().subscribe((res)=>{
      this.countryList = JSON.parse(JSON.stringify(res));
    });
  }

  europa(){
    this.seleccionoContinente = true;
    this.countryService.getAllCountrysEurope().subscribe((res)=>{
      this.countryList = JSON.parse(JSON.stringify(res));
    });
  }
}
