import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, ModalController } from '@ionic/angular';
import { ImageModalPage } from './image-modal.page';

describe('ImageModalPage', () => {
  let component: ImageModalPage;
  let fixture: ComponentFixture<ImageModalPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageModalPage],
      imports: [IonicModule.forRoot()], // Importa IonicModule para Ionic componentes
      providers: [
        ModalController, // Provee el ModalController
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
