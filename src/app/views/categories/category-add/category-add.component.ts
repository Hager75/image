import { Component, OnInit } from '@angular/core';
import { CategoriesService } from "./../../../shared/services/categories.service";
import { ToastrService } from 'ngx-toastr';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  addForm: FormGroup;
  submitted: boolean;

  constructor(
    private categoriesService: CategoriesService,
     private toastr: ToastrService,
     private router: Router,
     private fb: FormBuilder, ) { }

  ngOnInit(): void {
    this.buildAddForm();
  }


  onSubmit(){
    this.submitted = true;
    //stop here if form not valid
    if(this.addForm.invalid){
      return;
    }
    this.categoriesService.add(this.addForm.value).subscribe(
      res => {
        this.toastr.success('Course Add successfuly', 'success', {timeOut:3000, closeButton: true, progressBar: true});
        this.router.navigate(['../admin/categories']);
      },
      // err => {
      //   this.toastr.error(err.statusText, 'Error!', {timeOut:3000, closeButton: true, progressBar: true});
      // }
    );
  }

    // to access inputs
    get f() {return this.addForm.controls;}

    buildAddForm(){
      this.addForm = this.fb.group({
        title: [null, Validators.required],

      })
    }

}
