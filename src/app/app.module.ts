import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AceIdeModule} from "./ace-ide/ace-ide.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {PresentationModule} from "./presentation/presentation.module";
import {MatGridListModule} from "@angular/material/grid-list";
import {JsonCourseService} from "./presentation/course/json-course.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AceIdeModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        PresentationModule,
        MatGridListModule,
        HttpClientModule
    ],
    providers: [
        JsonCourseService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
