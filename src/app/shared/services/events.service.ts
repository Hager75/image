import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }
  public getAll(){
    console.log("getAll");

    return this.http.get(`${ environment.apiUrl }/api/events`);
    
  }
  delete(id){
    return this.http.delete(`${ environment.apiUrl }/api/events/${id}`);
  }
  add(data){
    return this.http.post(`${ environment.apiUrl }/api/events`,data);
  }
  getProduct(id){
    return this.http.get(`${ environment.apiUrl }/api/events/${id}`);
  }
  update(data, id){
    return this.http.put(`${ environment.apiUrl }/api/events/${id}`,data);
  }
}
