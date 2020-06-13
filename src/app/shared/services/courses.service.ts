import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders ,HttpParams} from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { catchError, retry, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  prev: string="";
  next: string ="";

  // private headers = new HttpHeaders({
  //   'Content-Type':'application/json',
  //   'Authorization':localStorage.getItem("ACCESS_TOKEN"),
    
  //   }); 

  // private _courseApi="http://127.0.0.8000/api/courses";

  constructor(private http: HttpClient) { }


  parseLinks(links){
    this.prev=links.prev;
    this.next=links.next;
  }  

  // get all coursesBearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYmI3OTc1YTc1YTA1ZGNkNjlhOWVlNWE0MTAyNWUyMzNmZjA3ZDgyOTRiZDgzMzllNDZhMjU0NjQwOWJmZTAxMjMzZDFhYmNiNmM5YmNmMmUiLCJpYXQiOjE1OTEzMjQ2NjcsIm5iZiI6MTU5MTMyNDY2NywiZXhwIjoxNjIyODYwNjY3LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.mqG8TIYtco3kEIQISH9lHS01VUeIkKe9yzHwN0YmQoq71_qnNZmWo-RjfKLRwzOcEiFeV25VPSNp-64xF7dsDO4Hep8Ww7Qz9tych-DwuNwLhwTlhJibwEGnLCkj-STMbs8C8BG44zTmcGb1DH5QFtB5eog1NWY0Gf_rm-LzN5dlb0y9gSLc_m8jMWhK_8ZT0Zyr_jNEYdYBQSdIlLTPX9VcI-LwfBL_-a5jsH2_UjUml_wixBE9UGQSDWCBZVJRzqsYzWA5Q5bJPXFifD5ai685zpfTpDuJd97cB3Gr4j9kgpQNIf_cwAcQYf3hoy2Xpf7OmBhVX6svigg3_Xodf4oQA5O5GUZC1Uwav7wf38uPMnTR4YXsQ6hXllLxsCXnJ-fAKg1nhimTJbt7fWtx4oj3oxT9HDIqHaDfB-5Fo4DpIEenBpY9QfzN2kvzWMfJUEeUdhLImik-ZkZ9DAuyzmkaFfOWRnXLdaBZ8ePpd6snlAMoFvR2DM6RBEWNRhIcrFhQz6tJ2wCaAHwXGgBdrenoRwEo2zjrh71tqFzmzBfShflz8Kmx4A7tYtMA8kg94MEx72mcX5LH4fLjWFYLOcxxoyrfFuOJxtuuXaLnq54AhnoVitlGmC4zefgjAWWn0wJ2j4Qg5IZVyfRtxVIfs_9iWHuiMn-2u-AarLas-yk
  public getAll(){
    console.log("getAll");

    return this.http.get(`${ environment.apiUrl }/api/courses`, {  params: new HttpParams({fromString: "_page=1&_limit=20"}), observe: "response"}).pipe(retry(3), tap((res: any) => {
      console.log(res.body.data);
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
    return this.http.delete(`${ environment.apiUrl }/api/courses/${id}`);
  }

  // Add new course
  add(data){
    return this.http.post(`${ environment.apiUrl }/api/courses`,data );
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
