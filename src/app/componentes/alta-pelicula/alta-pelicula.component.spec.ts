import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AltaPeliculaComponent } from './alta-pelicula.component';

describe('AltaPeliculaComponent', () => {
  let component: AltaPeliculaComponent;
  let fixture: ComponentFixture<AltaPeliculaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaPeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
