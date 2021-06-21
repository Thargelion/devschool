import {StepData} from "../../common/stepper/StepData";

export class LessonDTO implements StepData {

    private _title!: string;
    get title(): string {
        return this._title;
    }

    private _content!: string;
    get content(): string {
        return this._content;
    }
}
