import { TestBed } from '@angular/core/testing';

import { JsonCourseService } from './json-course.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('CourseService', () => {
  let service: JsonCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(JsonCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
