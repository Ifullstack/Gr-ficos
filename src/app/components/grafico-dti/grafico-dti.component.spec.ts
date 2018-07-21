import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoDtiComponent } from './grafico-dti.component';

describe('GraficoDtiComponent', () => {
  let component: GraficoDtiComponent;
  let fixture: ComponentFixture<GraficoDtiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoDtiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoDtiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
