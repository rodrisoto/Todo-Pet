import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';
import { DataService } from '../services/data.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

// Mock de SQLite
class MockSQLite {
  create(config: any) {
    return Promise.resolve({
      executeSql: (query: string, params: any[]) => Promise.resolve({ rows: { length: 0 } }),
    });
  }
}

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [IonicModule.forRoot()], // Configura Ionic para pruebas
      providers: [
        DataService, // Proveer el servicio DataService
        { provide: SQLite, useClass: MockSQLite }, // Usar el Mock de SQLite
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
