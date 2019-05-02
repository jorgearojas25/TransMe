import { TestBed } from '@angular/core/testing';

import { UsereventService } from './userevent.service';

describe('UsereventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsereventService = TestBed.get(UsereventService);
    expect(service).toBeTruthy();
  });
});
