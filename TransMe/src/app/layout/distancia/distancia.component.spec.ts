import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanciaComponent } from './distancia.component';

describe('DistanciaComponent', () => {
  let component: DistanciaComponent;
  let fixture: ComponentFixture<DistanciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistanciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
