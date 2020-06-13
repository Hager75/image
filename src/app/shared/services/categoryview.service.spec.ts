import { TestBed } from '@angular/core/testing';

import { CategoryviewService } from './categoryview.service';

describe('CategoryviewService', () => {
  let service: CategoryviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
