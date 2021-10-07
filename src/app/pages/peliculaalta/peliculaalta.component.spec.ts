import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaaltaComponent } from './peliculaalta.component';

describe('PeliculaaltaComponent', () => {
  let component: PeliculaaltaComponent;
  let fixture: ComponentFixture<PeliculaaltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculaaltaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaaltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
