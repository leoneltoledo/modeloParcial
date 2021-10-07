import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAltaRepartidorComponent } from './form-alta-repartidor.component';

describe('FormAltaRepartidorComponent', () => {
  let component: FormAltaRepartidorComponent;
  let fixture: ComponentFixture<FormAltaRepartidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAltaRepartidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAltaRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
