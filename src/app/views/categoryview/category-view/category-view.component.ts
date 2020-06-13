import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CategoryviewService } from 'src/app/shared/services/categoryview.service';


@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit {

  items: any = [];

  constructor(
    private categoryviewService: CategoryviewService,
     private modelService: NgbModal,
     private toastr: ToastrService,
     private fb: FormBuilder) { }

     ngOnInit(): void {
      this.getAll();
    }

      //get all courses
  getAll(){
    console.log("getAllComponent");
    
    this.categoryviewService.getAll().subscribe((res:any) =>{
     console.log(res.body.data);
    this.items = res.body.data;
    

    // this.coursesService.getAll().subscribe((courses: any[])=>{
    //   console.log(courses);
    //   this.courses_arr = courses;
    });
  }

// previousPage
public previousPage() {

  if (this.categoryviewService.prev !== undefined && this.categoryviewService.prev !== null) {
    this.items = [];
    this.categoryviewService.sendGetRequestToUrl(this.categoryviewService.prev).subscribe((res:any) => {
      console.log(res+"sh3;ala fel back");
      this.items = res.body.data;
    })
  }

}
// //=============================================================================

// nextPage
public nextPage() {
  if (this.categoryviewService.next !== undefined && this.categoryviewService.next !== null) {
    this.items = [];
    this.categoryviewService.sendGetRequestToUrl(this.categoryviewService.next).subscribe((res:any) => {
      console.log(res);
      this.items = res.body.data;
    })
  }
}



  // Delete Course
  deleteItem(model, id){
    this.modelService.open(model).result.then(result => {
      this.categoryviewService.delete(id).subscribe(res => {
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


}
