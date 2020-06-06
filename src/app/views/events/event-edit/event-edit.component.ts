import { Component, OnInit } from '@angular/core';
import { EventsService } from "./../../../shared/services/events.service";
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/models/event';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {
  editForm: FormGroup;
  submitted: boolean;
  eventId;
  eventDetails= {};
  event:Event=new Event() ;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
     private eventService: EventsService,
     private toastr: ToastrService) { }

  ngOnInit(): void {
    this.buildEditForm();
  
  this.route.params.subscribe(params => {
    // this.eventId = params.id;
    this.event.id =  params.id;
    this.eventService.getProduct(params.id).subscribe((res:any) => {
      // console.log("res"+res.data.name);
      // this.eventDetails = res;
      this.event = res.data;
      // console.log("details"+this.eventDetails);
    });
    
  });
}
get f() {return this.editForm.controls; }

buildEditForm(){
  this.editForm = this.fb.group({
    title: [null, Validators.required],
    description: [null, Validators.required],
    address: [null, Validators.required],
    event_time: [null, Validators.required],
    duration: [null, Validators.required],
    num_attendees: [null, Validators.required],
    // user_id: [null, Validators.required],
    // category_id: [null, Validators.required],
  });
}

onSubmit(form: NgForm){
  console.log(form);
  if(form.valid){
    const event = {...this.event};
    this.eventService.update(event,this.event.id).subscribe((res: any)=>{
      console.log(res);
      
      this.router.navigate(['../admin/events']);

    });
  }
}
}
