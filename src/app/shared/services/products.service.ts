import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { FormGroup, FormBuilder, Validators,NgForm } from '@angular/forms';

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
  // add(data,fileToUpload: File){
  //   const formData: FormData = new FormData();
  //   formData.append('image',fileToUpload, fileToUpload.name);
  //   //console.log(fileToUpload.name);
  //   formData.append('name',data.name);
  //   formData.append('description',data.description);
  //   formData.append('price',data.price);
  //   formData.append('quantity',data.quantity);
  //   formData.append('is_new',data.is_new);
  //   return this.http.post(`${ environment.apiUrl }/api/products`,formData);
  // }
  add(data,fileToUpload){
    const formData: FormData = new FormData();
    // const addFrom: FormGroup = new FormGroup();
    formData.append('image',fileToUpload, fileToUpload.name);
    // formData.append("profile", this.addForm.get('profile').value);
    // console.log(fileToUpload.name);
    formData.append('name',data.name);
    formData.append('description',data.description);
    formData.append('price',data.price);
    formData.append('quantity',data.quantity);
    formData.append('is_new',data.is_new);
    return this.http.post(`${ environment.apiUrl }/api/products`,formData);
  }
  getProduct(id){
    return this.http.get(`${ environment.apiUrl }/api/products/${id}`);
  }
  update(data, id){
    return this.http.put(`${ environment.apiUrl }/api/products/${id}`,data);
  }

  // postFile(fileToUpload: File) {
  //   // const endpoint = 'http://localhost:28101/api/UploadImage';
  //   const formData: FormData = new FormData();
  //   formData.append('Image', fileToUpload, fileToUpload.name);
  //   // formData.append('ImageCaption', caption);
  //   return this.http
  //     .post(`${ environment.apiUrl }/api/products`, formData);
  // }

  // function(url){
  //   return '<img src="{{url("uploads/images/")}}'+'/'+''+url+'" height="50" width="50">';
  //   } 
}
