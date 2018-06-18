import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrolloEncuestaComponent } from './desarrollo-encuesta.component';

describe('DesarrolloEncuestaComponent', () => {
  let component: DesarrolloEncuestaComponent;
  let fixture: ComponentFixture<DesarrolloEncuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesarrolloEncuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesarrolloEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
