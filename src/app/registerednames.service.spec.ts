import { TestBed } from '@angular/core/testing';

import { RegisterednamesService } from './registerednames.service';

describe('RegisterednamesService', () => {
  let service: RegisterednamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterednamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
