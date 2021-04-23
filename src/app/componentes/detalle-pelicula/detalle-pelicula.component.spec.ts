import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetallePeliculaComponent } from './detalle-pelicula.component';

describe('DetallePeliculaComponent', () => {
  let component: DetallePeliculaComponent;
  let fixture: ComponentFixture<DetallePeliculaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallePeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
