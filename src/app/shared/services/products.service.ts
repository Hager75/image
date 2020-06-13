import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  public getAll(){
    console.log("getAll");

    return this.http.get(`${ environment.apiUrl }/api/products`);
    
  }
  delete(id){
    return this.http.delete(`${ environment.apiUrl }/api/products/${id}`);
  }
  add(data){
    return this.http.post(`${ environment.apiUrl }/api/products`,data);
  }
  getProduct(id){
    return this.http.get(`${ environment.apiUrl }/api/products/${id}`);
  }
  update(data, id){
    return this.http.put(`${ environment.apiUrl }/api/products/${id}`,data);
  }
}
