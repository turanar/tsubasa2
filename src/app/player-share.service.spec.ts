import { TestBed, inject } from '@angular/core/testing';

import { PlayerShareService } from './player-share.service';

describe('PlayerShareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerShareService]
    });
  });

  it('should be created', inject([PlayerShareService], (service: PlayerShareService) => {
    expect(service).toBeTruthy();
  }));
});
