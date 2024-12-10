import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CompanyNameComponent } from './company-name.component';

describe('CompanyNameComponent', () => {
  let component: CompanyNameComponent;
  let fixture: ComponentFixture<CompanyNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyNameComponent], // Incluye el componente standalone aquí
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
