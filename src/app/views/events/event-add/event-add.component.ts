import { Component, OnInit } from '@angular/core';
import { EventsService } from "./../../../shared/services/events.service";
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {
  addForm: FormGroup;
  submitted: boolean;
  constructor(private router: Router,
    private fb: FormBuilder,
     private eventService:EventsService,
     private toastr: ToastrService) { }

  ngOnInit(): void {
    this.buildAddForm();
  }
  onSubmit(){
    this.submitted = true;
    //stop here if form not valid
    if(this.addForm.invalid){
      return;
    }
    this.eventService.add(this.addForm.value).subscribe(
      res => {
        this.toastr.success('Event Add successfuly', 'success', {timeOut:3000, closeButton: true, progressBar: true});
        this.router.navigate(['../admin/events']);
      },
      // err => {
      //   this.toastr.error(err.statusText, 'Error!', {timeOut:3000, closeButton: true, progressBar: true});
      // }
    );
  }
  get f() {return this.addForm.controls;}

  buildAddForm(){
    this.addForm = this.fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      address: [null, Validators.required],
      event_time: [null, Validators.required],
      duration: [null, Validators.required],
      num_attendees: [null, Validators.required],
      // user_id: [null, Validators.required],
      // category_id: [null, Validators.required],
    })
  }

}
