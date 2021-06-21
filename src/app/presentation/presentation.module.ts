import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StepperComponent} from '../common/stepper/stepper.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatButtonModule} from "@angular/material/button";
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
    declarations: [
        StepperComponent,
        DashboardComponent
    ],
    exports: [
        StepperComponent,
        DashboardComponent
    ],
    imports: [
        CommonModule,
        MatStepperModule,
        MatButtonModule,
        MatSnackBarModule
    ]
})
export class PresentationModule {
}
