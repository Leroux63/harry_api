import { TestBed } from '@angular/core/testing';

import { ApiHarryService } from './api-harry.service';

describe('ApiHarryService', () => {
  let service: ApiHarryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiHarryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
