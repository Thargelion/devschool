import {Course} from "./Course";
import {Observable} from "rxjs";

export abstract class CourseRepository {
    abstract getCourse(): Observable<Course>;
}
