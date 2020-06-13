import { Component, OnInit } from '@angular/core';
import { CourseviewService } from "./../../../shared/services/courseview.service";
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators, NgForm, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css']
})
export class CourseViewComponent implements OnInit {

  searchForm: FormGroup;
  items: any = [];
  flag: boolean = false;
 

  constructor(
    private courseviewService: CourseviewService,
     private modelService: NgbModal,
     private toastr: ToastrService,
     private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getAll();
  }

// search function
search(event){
  console.log(event.target.form[1].value);
  let search=event.target.form[1].value;
  console.log(search);
  
  this.courseviewService.search(search).subscribe((res:any) =>{
    console.log(res);
    this.flag=true;
  //  this.items = res.body.data;
  
});
}


  //get all courses
  getAll(){
    console.log("getAllComponent");
    
    this.courseviewService.getAll().subscribe(res =>{
     console.log(res);
    this.items = res.body.data;

    // this.coursesService.getAll().subscribe((courses: any[])=>{
    //   console.log(courses);
    //   this.courses_arr = courses;
    });
  }


// previousPage
public previousPage() {

  if (this.courseviewService.prev !== undefined && this.courseviewService.prev !== null) {
    this.items = [];
    this.courseviewService.sendGetRequestToUrl(this.courseviewService.prev).subscribe((res:any) => {
      console.log(res);
      this.items = res.body.data;
    })
  }

}
// //=============================================================================

// nextPage
public nextPage() {
  if (this.courseviewService.next !== undefined && this.courseviewService.next !== null) {
    this.items = [];
    this.courseviewService.sendGetRequestToUrl(this.courseviewService.next).subscribe((res:any) => {
      console.log(res);
      this.items = res.body.data;
    })
  }
}


  // Delete Course
  deleteItem(model, id){
    this.modelService.open(model).result.then(result => {
      this.courseviewService.delete(id).subscribe(res => {
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
