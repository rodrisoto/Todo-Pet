import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, ModalController } from '@ionic/angular';
import { GaleriaPage } from './galeria.page';

describe('GaleriaPage', () => {
  let component: GaleriaPage;
  let fixture: ComponentFixture<GaleriaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GaleriaPage],
      imports: [IonicModule.forRoot()], // Incluye el módulo de Ionic
      providers: [
        ModalController, // Proveer el ModalController
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GaleriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
