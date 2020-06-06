import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, retry, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  first: string="";
  prev: string="";
  next: string ="";
  last: string="";

  constructor(private _httpClient: HttpClient) { }
//=============================================================================

  parseLinks(links){
    this.first=links.first;
    this.prev=links.prev;
    this.next=links.next;
    this.last=links.last
  }
//==========================================================================

  public getPosts(){
    console.log("get posts service");
    // return this._httpClient.get(`${ environment.apiUrl }/api/posts`);
    return this._httpClient.get(`${ environment.apiUrl }/api/posts`, {  params: new HttpParams({fromString: "_page=1&_limit=20"}), observe: "response"}).pipe(retry(3), tap((res: any) => {
      console.log(res.body.data);
      this.parseLinks(res.body.links);
    }));
  
  }

//=============================================================================
public sendGetRequestToUrl(url: string){
  return this._httpClient.get(url, { observe: "response"}).pipe(retry(3), tap((res:any) => {
    console.log(res);
    this.parseLinks(res.body.links);

  }));
}
//=============================================================================

  public addPost(post){
    return this._httpClient.post(`${ environment.apiUrl }/api/posts`,post);
  }

//================================================================================
deletePost(id){
  return this._httpClient.delete(`${ environment.apiUrl }/api/posts/${id}`);
}
//================================================================================
getPostById(id){
  console.log("id: "+ id);
  
  console.log('get id service');
  
  return this._httpClient.get(`${ environment.apiUrl }/api/posts/${id}`);
}
//================================================================================

updatePost(data, id){
  return this._httpClient.put(`${ environment.apiUrl }/api/posts/${id}`,data);
}
}
