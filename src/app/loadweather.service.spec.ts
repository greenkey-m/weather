import { TestBed } from '@angular/core/testing';

import { LoadweatherService } from './loadweather.service';

describe('LoadweatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadweatherService = TestBed.get(LoadweatherService);
    expect(service).toBeTruthy();
  });
});
