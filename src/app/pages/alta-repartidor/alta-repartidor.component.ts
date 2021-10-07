import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormAltaRepartidorComponent } from 'src/app/componentes/form-alta-repartidor/form-alta-repartidor.component';

@Component({
  selector: 'app-repartidor-actor',
  templateUrl: './alta-repartidor.component.html',
  styleUrls: ['./alta-repartidor.component.css']
})
export class AltaRepartidorComponent implements OnInit {

  @Input() countryList!: any;
  public paisSeleccionado: any;
  public formGroup: FormGroup;
  

  constructor(private fb : FormBuilder,
    private router: Router) { }

  ngOnInit(): void {

    this.formGroup = this.fb.group({
      'nombre': ['', Validators.required],
      'apellido': ['', [Validators.required]],
      'edad': ['', [Validators.required, Validators.min(3), Validators.max(100)]],
      'dni': ['', [Validators.required, Validators.min(11111111), Validators.max(999999999)]],
      'capacidad': ['', [Validators.required, Validators.min(1), Validators.max(10)]],
      'nacionalidad': ['', Validators.required],
      'unidadPropia': ['',]
    })


  }

  public alta(): void{
    console.log(this.formGroup.getRawValue());
    console.log('Repartidor creado');
    this.router.navigate(['']);
  }

  seleccionPais(pais: any){
    console.info(pais);
    this.paisSeleccionado = pais;
    this.formGroup.controls['nacionalidad'].setValue(pais.name);
  }
}
