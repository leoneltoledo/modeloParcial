import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BusquedaPeliculasComponent } from './busqueda-peliculas.component';

describe('BusquedaPeliculasComponent', () => {
  let component: BusquedaPeliculasComponent;
  let fixture: ComponentFixture<BusquedaPeliculasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaPeliculasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
