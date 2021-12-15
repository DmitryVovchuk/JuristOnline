import { TestBed } from '@angular/core/testing';

import { HomePageDataService } from './home-page-data.service';

describe('HomePageDataService', () => {
  let service: HomePageDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomePageDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
