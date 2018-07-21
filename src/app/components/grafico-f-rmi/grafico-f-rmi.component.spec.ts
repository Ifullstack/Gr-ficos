import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoFRMIComponent } from './grafico-f-rmi.component';

describe('GraficoFRMIComponent', () => {
  let component: GraficoFRMIComponent;
  let fixture: ComponentFixture<GraficoFRMIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoFRMIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoFRMIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
