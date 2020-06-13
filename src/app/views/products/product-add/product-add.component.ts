import { Component, OnInit } from '@angular/core';
import { ProductsService } from "./../../../shared/services/products.service";
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  image;
  addForm: FormGroup;
  submitted: boolean;
  constructor(private router: Router,
    private fb: FormBuilder,
     private productService: ProductsService,
     private toastr: ToastrService) { }

  ngOnInit(): void {
    // this.buildAddForm();

    this.addForm = this.fb.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      profile: [null],
      price: [null, Validators.required],
      quantity: [null, Validators.required],
      is_new: [null, Validators.required],
      // user_id: [null, Validators.required],
      // category_id: [null, Validators.required],
    });
  }

  // onFileChange(e){
    onFileChange(event){
    
      const file = (event.target as HTMLInputElement).files[0];
      this.addForm.patchValue({
        profile: file
      });
      this.addForm.get('profile').updateValueAndValidity()
    }


  onSubmit(){


    console.log(this.addForm.value);
   var formData: any = new FormData();
    formData.append("name", this.addForm.get('name').value);
    formData.append("description", this.addForm.get('description').value);
    formData.append("profile", this.addForm.get('profile').value);
    formData.append("price", this.addForm.get('price').value);
    formData.append("quantity", this.addForm.get('quantity').value);
    formData.append("is_new", this.addForm.get('is_new').value);
    // formData.append("user_id", this.addForm.get('user_id').value);
    // formData.append("category_id", this.addForm.get('category_id').value);





    // this.submitted = true;
    // //stop here if form not valid
    // if(this.addForm.invalid){
    //   return;
    // }
    this.productService.add(formData).subscribe((res:any) => {
        this.toastr.success('Product Add successfuly', 'success', {timeOut:3000, closeButton: true, progressBar: true});
        this.router.navigate(['../admin/products']);
      },
      // err => {
      //   this.toastr.error(err.statusText, 'Error!', {timeOut:3000, closeButton: true, progressBar: true});
      // }
    );
  }


  // get f() {return this.addForm.controls;}

  // buildAddForm(){
  //   this.addForm = this.fb.group({
  //     name: [null, Validators.required],
  //     description: [null, Validators.required],
  //     image: [null, Validators.required],
  //     price: [null, Validators.required],
  //     quantity: [null, Validators.required],
  //     is_new: [null, Validators.required],
  //     // user_id: [null, Validators.required],
  //     // category_id: [null, Validators.required],
  //   });
  // }

  // onSelectedFile(event){
  //   if (event.target.files.length>0){
  //     const file = event.target.files[0];
  //     this.addForm.get('image').setValue(file);
  //   }
  // }
}
