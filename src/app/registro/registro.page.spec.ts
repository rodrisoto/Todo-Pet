import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RegistroPage } from './registro.page';
import { DataService } from '../services/data.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('RegistroPage', () => {
  let component: RegistroPage;
  let fixture: ComponentFixture<RegistroPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroPage],
      imports: [IonicModule.forRoot()],
      providers: [
        DataService,
        {
          provide: SQLite,
          useValue: {
            create: jasmine.createSpy('create').and.returnValue(
              Promise.resolve({
                executeSql: jasmine.createSpy('executeSql').and.returnValue(Promise.resolve({ rows: [] })),
              })
            ),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the page', () => {
    expect(component).toBeTruthy();
  });

  it('should call guardar when form is valid', () => {
    component.nombre = 'John';
    component.apellido = 'Doe';
    spyOn(component, 'guardar').and.callThrough();
    component.guardar();
    expect(component.guardar).toHaveBeenCalled();
  });

  it('should show error when name or surname is empty', async () => {
    component.nombre = '';
    component.apellido = '';
    spyOn(component, 'presentAlert');
    component.guardar();
    expect(component.presentAlert).toHaveBeenCalledWith('Error: nombre y apellido vacios');
  });
});
