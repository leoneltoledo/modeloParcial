import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-alta-repartidor',
  templateUrl: './form-alta-repartidor.component.html',
  styleUrls: ['./form-alta-repartidor.component.css']
})
export class FormAltaRepartidorComponent implements OnInit {
  public formGroup: FormGroup;
  public paisSeleccionado: any;

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

    //this.paisSeleccionado = JSON.parse(localStorage.getItem('pais'));
    console.log(this.paisSeleccionado);
    setInterval(() => {
      if(!this.paisSeleccionado){
        console.log(this.paisSeleccionado);
        clearInterval();
      }
    }, 300);
  }

  public alta(): void{
    console.log(this.formGroup.getRawValue());
    console.log('Repartidor creado');
    this.router.navigate(['']);
  }

  seleccionPais(pais: any){
    console.info(pais);
    this.paisSeleccionado = pais;
    //this.formGroup.controls['nacionalidad'].setValue(pais.name);
    localStorage.setItem('pais', pais.name);
  }



}
