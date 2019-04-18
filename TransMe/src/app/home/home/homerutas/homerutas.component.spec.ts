import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomerutasComponent } from './homerutas.component';

describe('HomerutasComponent', () => {
  let component: HomerutasComponent;
  let fixture: ComponentFixture<HomerutasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomerutasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomerutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
