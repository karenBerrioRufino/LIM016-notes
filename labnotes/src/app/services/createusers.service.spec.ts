import { TestBed } from '@angular/core/testing';

import { CreateusersService } from './createusers.service';

describe('CreateusersService', () => {
  let service: CreateusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
