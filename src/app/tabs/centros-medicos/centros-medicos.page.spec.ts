import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CentrosMedicosPage } from './centros-medicos.page'; // Cambiar el nombre aquí

describe('CentrosMedicosPage', () => { // Cambiar el nombre aquí
  let component: CentrosMedicosPage; // Cambiar el nombre aquí
  let fixture: ComponentFixture<CentrosMedicosPage>; // Cambiar el nombre aquí

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrosMedicosPage); // Cambiar el nombre aquí
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

