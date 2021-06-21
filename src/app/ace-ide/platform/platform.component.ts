import {Component, OnInit} from '@angular/core';
import {require} from "ace-builds";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatSnackBarConfig} from "@angular/material/snack-bar/snack-bar-config";


@Component({
    selector: 'app-platform',
    templateUrl: './platform.component.html',
    styleUrls: ['./platform.component.scss']
})

export class PlatformComponent implements OnInit {
    sk = require('skulpt/main');
    codeOutput: string[] = [];

    constructor(private _snackBar: MatSnackBar) {
    }

    ngOnInit(): void {
        this.sk.pre = "output";
        this.sk.configure({
            output: (text: string) => {
                this.codeOutput.push(text);
            }
        });
    }

    clearLog() {
        this.codeOutput = [];
    }

    executeCode(codeInput: string) {
        const executePromise: Promise<any> = this.sk.misceval.asyncToPromise(() => {
            return this.sk.importMainWithBody("<stdin>", true, codeInput, true);
        });
        executePromise.then(
            () => {
                this._snackBar.open('Success');
            },
            (err) => {
                this._snackBar.open('Error');
                this.codeOutput.push(err.toString());
            }
        );
    }

}
