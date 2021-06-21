import { TestBed } from '@angular/core/testing';

import { JsonCourseService } from './json-course.service';

describe('CourseService', () => {
  let service: JsonCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
