import {Component, Inject, OnInit} from '@angular/core';
import {CourseRepository} from "../course/CourseRepository";
import {StepData} from "../../common/stepper/StepData";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    steps!: StepData[]

    constructor(@Inject('CourseRepository') private courseRepository: CourseRepository) {
        courseRepository.getCourse().subscribe(
            course => {
                this.steps = course.lessonList;
            }
        )
    }

    ngOnInit(): void {
    }

}
