import {Component, Input, OnInit} from '@angular/core';
import {StepData} from "./StepData";

@Component({
    selector: 'app-stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

    @Input() steps!: StepData[];

    constructor() {
    }

    ngOnInit(): void {
    }

}
