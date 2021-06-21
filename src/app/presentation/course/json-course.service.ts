import {Injectable} from '@angular/core';
import {CourseRepository} from "./CourseRepository";
import {Course} from "./Course";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class JsonCourseService implements CourseRepository {

    constructor(private _httpClient: HttpClient) {
    }

    getCourse(): Observable<Course> {
        return this._httpClient.get<Course>(
            "assets/json/first_class.json"
        );
    }


}
