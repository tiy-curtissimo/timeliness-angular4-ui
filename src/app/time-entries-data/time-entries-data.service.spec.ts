import { TestBed, inject } from '@angular/core/testing';

import { TimeEntriesDataService } from './time-entries-data.service';

describe('TimeEntriesDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeEntriesDataService]
    });
  });

  it('should be created', inject([TimeEntriesDataService], (service: TimeEntriesDataService) => {
    expect(service).toBeTruthy();
  }));
});
