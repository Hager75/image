import { Component, OnInit } from '@angular/core';
import { CategoriesService } from "./../../../shared/services/categories.service";
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  items: any = [];

  constructor(
    private categoriesService: CategoriesService,
     private modelService: NgbModal,
     private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAll();
  }

   //get all courses
   getAll(){
    console.log("getAllComponent");
    
    this.categoriesService.getAll().subscribe((res:any) =>{
    //  console.log(res);
    this.items = res;

    // this.coursesService.getAll().subscribe((courses: any[])=>{
    //   console.log(courses);
    //   this.courses_arr = courses;
    });
  }

  // Delete Course
  deleteItem(model, id){
    this.modelService.open(model).result.then(result => {
      this.categoriesService.delete(id).subscribe(res => {
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
