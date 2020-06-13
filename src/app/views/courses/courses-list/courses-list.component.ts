import { Component, OnInit } from '@angular/core';
import { CoursesService } from "./../../../shared/services/courses.service";
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  items: any = [];

  constructor(
    private coursesService: CoursesService,
     private modelService: NgbModal,
     private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAll();
    
  }

  //get all courses
  getAll(){
    console.log("getAllComponent");
    
    this.coursesService.getAll().subscribe((res: any) =>{
    //  console.log(res);
    this.items = res.body.data;

    // this.coursesService.getAll().subscribe((courses: any[])=>{
    //   console.log(courses);
    //   this.courses_arr = courses;
    });
  }


 
  // //===============================================================
  
  public previousPage() {
  
    if (this.coursesService.prev !== undefined && this.coursesService.prev !== null) {
      this.items = [];
      this.coursesService.sendGetRequestToUrl(this.coursesService.prev).subscribe((res:any) => {
        console.log(res);
        this.items = res.body.data;
      })
    }
  
  }

/// =========================================

public nextPage() {
  if (this.coursesService.next !== undefined && this.coursesService.next !== null) {
    this.items = [];
    this.coursesService.sendGetRequestToUrl(this.coursesService.next).subscribe((res:any) => {
      console.log(res);
      this.items = res.body.data;
    })
  }
}
//=====================================


  // Delete Course
  deleteItem(model, id){
    this.modelService.open(model).result.then(result => {
      this.coursesService.delete(id).subscribe(res => {
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
