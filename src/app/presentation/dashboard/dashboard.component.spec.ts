import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardComponent} from './dashboard.component';
import {CourseRepository} from "../course/CourseRepository";
import {Course} from "../course/Course";
import {Observable} from "rxjs";

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;
    const expectedCourse = new Course();
    const repoSpy = jasmine.createSpyObj('CourseRepository', ['getCourse']);
    repoSpy.getCourse.and.callFake(() => {
       return new Observable(observer => {
           observer.next(expectedCourse);
       })
    });

    beforeEach(async () => {
        await TestBed
            .overrideComponent(DashboardComponent,
                {
                    set: {
                        providers: [
                            {
                                provide: CourseRepository,
                                useValue: repoSpy
                            }
                        ]
                    }
                })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
