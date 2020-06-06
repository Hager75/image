import { Component, OnInit } from '@angular/core';
import { CoursesService } from "./../../../shared/services/courses.service";
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/course';




@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  editForm: FormGroup;
  submitted: boolean;
  courseId;
  // courseDetails:Array<object> = [];
  courseDetails= {};
  course:Course=new Course() ;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
     private courseService: CoursesService,
     private toastr: ToastrService) { }

  ngOnInit() {
    this.buildEditForm();

    // GEt course data id
    this.route.params.subscribe(params => {
      // this.courseId = params.id;
      this.course.id =  params.id;
      this.courseService.getCourse(params.id).subscribe((res:any) => {
        // console.log("res"+res.data.name);
        // this.courseDetails = res;
        this.course = res.data;
        // console.log("details"+this.courseDetails);
      });
      
    });
  }

  // to access inputs
  get f() {return this.editForm.controls; }

  buildEditForm(){
    this.editForm = this.fb.group({
      name: [null, Validators.required],
      duration: [null, Validators.required],
      start_date: [null, Validators.required],
      end_date: [null, Validators.required],
      group_limit: [null, Validators.required],
      description: [null, Validators.required],
      instructor_name: [null, Validators.required],
      price: [null, Validators.required],
      // user_id: [null, Validators.required],
      // category_id: [null, Validators.required],
    });
  }

  // onSubmit(){
  //   this.submitted = true;
  //   //stop here if form not valid
  //   if(this.editForm.invalid){
  //     return;
  //   }
  //   this.courseService.update(this.editForm.value, this.courseId).subscribe(
  //     res => {
  //       console.log(res);
  //       console.log(this.courseDetails);
        
        
  //       // this.courseDetails = res;
  //       this.toastr.success('Course Add successfuly', 'success', {timeOut:3000, closeButton: true, progressBar: true});
  //       this.router.navigate(['../admin/courses']);
  //     },
  //     err => {
  //       this.toastr.error(err.statusText, 'Error!', {timeOut:3000, closeButton: true, progressBar: true});
  //     }
  //   );
  // }

  onSubmit(form: NgForm){
    console.log(form);
    if(form.valid){
      const course = {...this.course};
      this.courseService.update(course,this.course.id).subscribe((res: any)=>{
        console.log(res);
        
        this.router.navigate(['../admin/courses']);
  
      });
    }
  }

}
