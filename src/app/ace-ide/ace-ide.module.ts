import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OutputComponent} from './output/output.component';
import {AceEditorComponent} from "./ace-editor/ace-editor.component";
import {PlatformComponent} from './platform/platform.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatGridListModule} from "@angular/material/grid-list";


@NgModule({
    declarations: [
        OutputComponent,
        AceEditorComponent,
        PlatformComponent
    ],
    exports: [
        AceEditorComponent,
        PlatformComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatListModule,
        MatGridListModule
    ]
})
export class AceIdeModule {
}
