import { TestBed } from '@angular/core/testing';

import { CourseviewService } from './courseview.service';

describe('CourseviewService', () => {
  let service: CourseviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
