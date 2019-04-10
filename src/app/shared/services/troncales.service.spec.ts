import { TestBed } from '@angular/core/testing';

import { TroncalesService } from './troncales.service';

describe('TroncalesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TroncalesService = TestBed.get(TroncalesService);
    expect(service).toBeTruthy();
  });
});
