import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestadoresComponent } from './encuestadores.component';

describe('EncuestadoresComponent', () => {
  let component: EncuestadoresComponent;
  let fixture: ComponentFixture<EncuestadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
