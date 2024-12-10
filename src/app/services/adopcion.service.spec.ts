import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AdopcionService } from './adopcion.service';

describe('AdopcionService', () => {
  let service: AdopcionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AdopcionService],
    });
    service = TestBed.inject(AdopcionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
