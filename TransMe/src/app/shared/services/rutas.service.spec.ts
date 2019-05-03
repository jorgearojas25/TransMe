import { TestBed } from '@angular/core/testing';

import { RutasService } from './rutas.service';

describe('RutasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RutasService = TestBed.get(RutasService);
    expect(service).toBeTruthy();
  });
});
