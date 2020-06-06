import { Component, OnInit } from '@angular/core';
import { ProductsService } from "./../../../shared/services/products.service";
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators,NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  addForm: FormGroup;
  submitted: boolean;
  imageUrl: string = "/assets/img/picture.png";
  fileToUpload: File = null;
  // url ;
// title = 'angularlaraveluploadimage';
// filedata:any;
// fileEvent(e){
// this.filedata = e.target.files[0]; }
  
  constructor(private router: Router,
    private fb: FormBuilder,
     private productService: ProductsService,
     private toastr: ToastrService,
     private http:HttpClient) { }

  ngOnInit(): void {
    this.buildAddForm();
  }

  // onSubmit(f: NgForm) {

  //   var myFormData = new FormData();
  //   const headers = new HttpHeaders();
  //   headers.append('Content-Type', 'multipart/form-data');
  //   headers.append('Accept', 'application/json');
  //   myFormData.append('image', this.filedata);
  //   this.http.post('http://localhost:8000/api/products', myFormData, {
  //   headers: headers
  //   }).subscribe(data => {
  //   console.log(data);
  //   });
    
  onSubmit(){
    this.submitted = true;
    //stop here if form not valid
    if(this.addForm.invalid){
      return;
    }
    this.productService.add(this.addForm.value,this.fileToUpload).subscribe(
      (res:any) => {
        this.toastr.success('Product Add successfuly', 'success', {timeOut:3000, closeButton: true, progressBar: true});
        this.router.navigate(['../admin/products']);
      },
      // err => {
      //   this.toastr.error(err.statusText, 'Error!', {timeOut:3000, closeButton: true, progressBar: true});
      // }
    );
//start of image
// this.productService.postFile(this.fileToUpload).subscribe(
//   data =>{
//     console.log('done');
//     // Caption.value = null;
//     Image.value = null;
//     this.imageUrl = "/assets/img/picture.png";
//   }
// );
//end of image code in submitt function 
  }
  get f() {return this.addForm.controls;}

  buildAddForm(){
    this.addForm = this.fb.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
     // image: [null, Validators.required],
      price: [null, Validators.required],
      quantity: [null, Validators.required],
      is_new: [null, Validators.required],
      // user_id: [null, Validators.required],
      // category_id: [null, Validators.required],
    })
  }
  // onSelectedFile(event){
  //   if (event.target.files.length>0){
  //     const file = event.target.files[0];
  //     this.addForm.get('image').setValue(file);
  //   }
  // }
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  // onFileChange(event){

  //   const file = (event.target as HTMLInputElement).files[0];
  //   this.addForm.patchValue({
  //   profile: file
  //   });
  //   this.addForm.get('profile').updateValueAndValidity()
  //   } 
    // function(url){
    // return '<img src="{{url("uploads/images/")}}'+'/'+''+url+'" height="50" width="50">';
    // } 
  }
// }
