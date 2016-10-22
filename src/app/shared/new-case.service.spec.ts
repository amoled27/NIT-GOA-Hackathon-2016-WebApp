/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NewCaseService } from './new-case.service';

describe('Service: NewCase', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewCaseService]
    });
  });

  it('should ...', inject([NewCaseService], (service: NewCaseService) => {
    expect(service).toBeTruthy();
  }));
});
