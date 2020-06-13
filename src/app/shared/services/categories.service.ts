import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  // get all courses
  public getAll(){
    console.log("getAll");

    return this.http.get(`${ environment.apiUrl }/api/categories`);
    // return this.http.get(this._courseApi);
  }

  // Delete Course
  delete(id){
    return this.http.delete(`${ environment.apiUrl }/api/categories/${id}`);
  }

  // Add new course
  add(data){
    return this.http.post(`${ environment.apiUrl }/api/categories`,data);
  }

  //Get course
  getCourse(id){
    return this.http.get(`${ environment.apiUrl }/api/categories/${id}`);
  }

  // Edit Courses
  update(data, id){
    return this.http.put(`${ environment.apiUrl }/api/categories/${id}`,data);
  }

}
