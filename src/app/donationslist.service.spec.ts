import { TestBed, inject } from '@angular/core/testing';

import { DonationslistService } from './donationslist.service';

describe('DonationslistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DonationslistService]
    });
  });

  it('should be created', inject([DonationslistService], (service: DonationslistService) => {
    expect(service).toBeTruthy();
  }));
});
