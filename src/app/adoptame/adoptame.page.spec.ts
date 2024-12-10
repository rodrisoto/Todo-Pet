import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';
import { AdoptamePage } from './adoptame.page';
import { AdopcionService } from '../services/adopcion.service';

describe('AdoptamePage', () => {
  let component: AdoptamePage;
  let fixture: ComponentFixture<AdoptamePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdoptamePage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule], // Incluye HttpClientTestingModule aquí
      providers: [AdopcionService], // Asegúrate de proveer el servicio si no es standalone
    }).compileComponents();

    fixture = TestBed.createComponent(AdoptamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
