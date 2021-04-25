import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.css']
})
export class AltaActorComponent implements OnInit {

  @Input() countryList!: any;
  public paisSeleccionado: any;
  public formGroup: FormGroup;
  

  constructor(
    private fb : FormBuilder,
    private countryService: CountryService,
    private router: Router
  ) { 

  }

  ngOnInit(): void {
    this.countryService.getAllCountrys().subscribe((res)=>{
      this.countryList = JSON.parse(JSON.stringify(res));
    });

    this.formGroup = this.fb.group({
      'nombre': ['', Validators.required],
      'apellido': ['', [Validators.required]],
      'edad': ['', [Validators.required, Validators.min(3), Validators.max(100)]],
      'altura': ['', [Validators.required, Validators.min(100), Validators.max(240)]],
      'nacionalidad': ['', Validators.required]
    })
    
  }

  seleccionPais(pais: any){
    console.info(pais);
    this.paisSeleccionado = pais;
    this.formGroup.controls['nacionalidad'].setValue(pais.name);
  }

  public alta(): void{
    console.log(this.formGroup.getRawValue());
    console.log('Actor creado');
    this.router.navigate(['']);
  }
}
