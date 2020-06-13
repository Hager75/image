import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient  , HttpParams} from '@angular/common/http';
import { catchError, retry, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryviewService {

  prev: string="";
  next: string ="";

  constructor(private http: HttpClient) { }


  parseLinks(links){
    this.prev=links.prev;
    this.next=links.next;
  } 

  public getAll(){
    console.log("getAll");

    return this.http.get(`${ environment.apiUrl }/api/categories`, {  params: new HttpParams({fromString: "_page=1&_limit=20"}), observe: "response"}).pipe(retry(3), tap((res: any) => {
      console.log(res.body.links);
      this.parseLinks(res.body.links);
    }));
    // return this.http.get(this._courseApi);
  }

  public sendGetRequestToUrl(url: string){
    return this.http.get(url, { observe: "response"}).pipe(retry(3), tap((res:any) => {
      console.log(res);
      this.parseLinks(res.body.links);
  
    }));
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
