import {Course} from "./Course";
import {Observable} from "rxjs";

export interface CourseRepository {
    getCourse(): Observable<Course>;
}
