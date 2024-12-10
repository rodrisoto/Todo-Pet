import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

// Mock de SQLite
class MockSQLite {
  create(config: any) {
    return Promise.resolve({
      executeSql: (query: string, params: any[]) => Promise.resolve({ rows: { length: 0 } }),
    });
  }
}

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DataService,
        { provide: SQLite, useClass: MockSQLite }, // Proveer el mock de SQLite
      ],
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
