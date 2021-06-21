import {LessonDTO} from "../lesson/LessonDTO";

export class Course {
    private _lessonList!: LessonDTO[];

    get lessonList(): LessonDTO[] {
        return this._lessonList;
    }
}
