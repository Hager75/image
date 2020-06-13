import { Component, OnInit } from '@angular/core';
import { ProductviewService } from "./../../../shared/services/productview.service";
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  searchForm: FormGroup;
  items: any = [];
  flag: boolean = false;

  constructor(  private productviewService: ProductviewService,
     private modelService: NgbModal,
     private toastr: ToastrService,
     private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getAll();
  }
  search(event){
    console.log(event.target.form[1].value);
    let search=event.target.form[1].value;
    console.log(search);
    
    this.productviewService.search(search).subscribe((res:any) =>{
      console.log(res);
      this.flag=true;
    //  this.items = res.body.data;
    
  });
  }
  
  
    //get all courses
    getAll(){
      console.log("getAllComponent");
      
      this.productviewService.getAll().subscribe(res =>{
       console.log(res);
      this.items = res.body.data;
  
      // this.coursesService.getAll().subscribe((courses: any[])=>{
      //   console.log(courses);
      //   this.courses_arr = courses;
      });
    }
  
  
  // previousPage
  public previousPage() {
  
    if (this.productviewService.prev !== undefined && this.productviewService.prev !== null) {
      this.items = [];
      this.productviewService.sendGetRequestToUrl(this.productviewService.prev).subscribe((res:any) => {
        console.log(res);
        this.items = res.body.data;
      })
    }
  
  }
  // //=============================================================================
  
  // nextPage
  public nextPage() {
    if (this.productviewService.next !== undefined && this.productviewService.next !== null) {
      this.items = [];
      this.productviewService.sendGetRequestToUrl(this.productviewService.next).subscribe((res:any) => {
        console.log(res);
        this.items = res.body.data;
      })
    }
  }
  
  
    // Delete Course
    deleteItem(model, id){
      this.modelService.open(model).result.then(result => {
        this.productviewService.delete(id).subscribe(res => {
          this.toastr.success('Course deleted successfuly', 'success', {timeOut:3000, closeButton: true, progressBar: true});
          console.log(res);
          
          this.getAll();
      },
      err => {
        this.toastr.error(err.statusText, 'Error!', {timeOut:3000, closeButton: true, progressBar: true});
        console.log(err);
        
        
        }
       );
      },
      reason => {
        console.log(reason);
      });
    }
  
    
    // to access inputs
    get f() {return this.searchForm.controls; }
  
}
