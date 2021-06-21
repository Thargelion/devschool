import {EventEmitter} from '@angular/core';
import {AfterViewInit, Component, ElementRef, OnInit, Output, ViewChild} from '@angular/core';
import * as ace from "ace-builds";
import {Ace} from "ace-builds";

@Component({
    selector: 'app-ace-editor',
    templateUrl: './ace-editor.component.html',
    styleUrls: ['./ace-editor.component.scss']
})
export class AceEditorComponent implements AfterViewInit {
    @ViewChild("editor") private editor!: ElementRef<HTMLElement>;
    @Output() emitResult = new EventEmitter<string>();
    @Output() emitClear = new EventEmitter<void>();

    private aceEditor !: Ace.Editor;

    constructor() {
    }

    ngOnInit(): void {
    }

    generateCode() {
        this.emitResult.emit(this.aceEditor.getValue());
    }

    clearLog() {
        this.emitClear.emit();
    }

    ngAfterViewInit(): void {
        ace.config.set("fontSize", "14px");
        ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict');
        this.aceEditor = ace.edit(this.editor.nativeElement);
        this.aceEditor.session.setValue("");
        this.aceEditor.setTheme('ace/theme/twilight');
        this.aceEditor.session.setMode('ace/mode/python');
    }

}
