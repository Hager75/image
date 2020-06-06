import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  // private _courseApi="http://127.0.0.8000/api/courses";

  constructor(private http: HttpClient) { }

  // get all courses
  public getAll(){
    console.log("getAll");

    return this.http.get(`${ environment.apiUrl }/api/courses`);
    // return this.http.get(this._courseApi);
  }

  // Delete Course
  delete(id){
    return this.http.delete(`${ environment.apiUrl }/api/courses/${id}`);
  }

  // Add new course
  add(data){
    return this.http.post(`${ environment.apiUrl }/api/courses`,data);
  }

  //Get course
  getCourse(id){
    return this.http.get(`${ environment.apiUrl }/api/courses/${id}`);
  }

  // Edit Courses
  update(data, id){
    return this.http.put(`${ environment.apiUrl }/api/courses/${id}`,data);
  }

}
