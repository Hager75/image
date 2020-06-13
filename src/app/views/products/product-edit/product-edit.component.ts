import { Component, OnInit } from '@angular/core';
import { ProductsService } from "./../../../shared/services/products.service";
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  editForm: FormGroup;
  submitted: boolean;
  productId;
  // courseDetails:Array<object> = [];
  productDetails= {};
  product:Product=new Product() ;
  constructor(    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
     private productService: ProductsService,
     private toastr: ToastrService) { }

  ngOnInit(): void {
    this.buildEditForm();

    // GEt course data id
    this.route.params.subscribe(params => {
      // this.courseId = params.id;
      this.product.id =  params.id;
      this.productService.getProduct(params.id).subscribe((res:any) => {
        // console.log("res"+res.data.name);
        // this.courseDetails = res;
        this.product = res.data;
        // console.log("details"+this.courseDetails);
      });
      
    });
  }
  get f() {return this.editForm.controls; }

  buildEditForm(){
    this.editForm = this.fb.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      //image: [null, Validators.required],
      price: [null, Validators.required],
      quantity: [null, Validators.required],
      is_new: [null, Validators.required],
      // user_id: [null, Validators.required],
      // category_id: [null, Validators.required],
    });
  }

  onSubmit(form: NgForm){
    this.submitted = true;
    console.log(form);
    if(form.valid){
      const product = {...this.product};
      this.productService.update(product,this.product.id).subscribe((res: any)=>{
        console.log(res);
        
        this.router.navigate(['../admin/products']);
  
      });
    }
  }

}
