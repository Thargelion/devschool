import {Component, OnInit} from '@angular/core';
import {CourseRepository} from "../course/CourseRepository";
import {StepData} from "../../common/stepper/StepData";
import {JsonCourseService} from "../course/json-course.service";

@Component({
    selector: 'app-presentation-dashboard',
    templateUrl: './dashboard.component.html',
    providers: [{provide: CourseRepository, useExisting: JsonCourseService}],
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    steps!: StepData[]

    constructor(private courseRepository: CourseRepository) {
        courseRepository.getCourse().subscribe(
            course => {
                this.steps = course.lessonList;
            }
        )
    }

    ngOnInit(): void {
    }

}
