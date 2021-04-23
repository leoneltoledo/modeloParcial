import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BienvenidoComponent } from './bienvenido.component';

describe('BienvenidoComponent', () => {
  let component: BienvenidoComponent;
  let fixture: ComponentFixture<BienvenidoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BienvenidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BienvenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
