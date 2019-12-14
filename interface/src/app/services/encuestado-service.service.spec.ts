import { TestBed } from '@angular/core/testing';

import { EncuestadoServiceService } from './encuestado-service.service';

describe('EncuestadoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EncuestadoServiceService = TestBed.get(EncuestadoServiceService);
    expect(service).toBeTruthy();
  });
});
