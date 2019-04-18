import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioconfComponent } from './usuarioconf.component';

describe('UsuarioconfComponent', () => {
  let component: UsuarioconfComponent;
  let fixture: ComponentFixture<UsuarioconfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioconfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioconfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
