import { Component, OnInit,ViewChild, ElementRef, NgZone } from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  UserService
} from './../../../shared/services/user.service';
import {user} from './../../../models/user.model';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';



@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  image;
  // user=new user();
  uploadForm: FormGroup;  
  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom: number;
  // address: string;
  private geoCoder;
  // title;lat;lng;
  @ViewChild('search')
  public searchElementRef: ElementRef;


  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router) {}

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      profile: [null],
      first_name: [''],
     last_name: [''],
     mobile: [''],
     national_id: [''],
     role: [''],
     email: [''],
     latitude: [''],
     longitude: [''],
     address: [''],
     password: [''],
     password_confirmation: ['']
   
    });
    this.placeAutocomplete();

  }

  // onFileChange(e){
  onFileChange(event){
    
    const file = (event.target as HTMLInputElement).files[0];
    this.uploadForm.patchValue({
      profile: file
    });
    this.uploadForm.get('profile').updateValueAndValidity()
  }

  onSubmit() {
 
   var formData: any = new FormData();
    formData.append("profile", this.uploadForm.get('profile').value);
    formData.append("first_name", this.uploadForm.get('first_name').value);
    formData.append("last_name", this.uploadForm.get('last_name').value);
    formData.append("mobile", this.uploadForm.get('mobile').value);
    formData.append("national_id", this.uploadForm.get('national_id').value);
    formData.append("role", this.uploadForm.get('role').value);
    formData.append("email", this.uploadForm.get('email').value);
    formData.append("latitude", this.latitude);
    formData.append("longitude", this.longitude);
    // formData.append("latitude", this.uploadForm.get('latitude').value);
    // formData.append("longitude", this.uploadForm.get('longitude').value);
    formData.append("address", this.uploadForm.get('address').value);
    formData.append("password", this.uploadForm.get('password').value);
    formData.append("password_confirmation", this.uploadForm.get('password_confirmation').value); 
    
    console.log(formData);
    
    // POST_Request
    this.userService.addUser(formData).subscribe((res: any) => {
      this.toastr.success('User Add successfuly', 'success', {timeOut:3000, closeButton: true, progressBar: true});
      this.router.navigate(['../admin/users']);
     } );

  }
  // to Create Map Dragable
  private placeAutocomplete(){
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
  
    });
  }
   // Get Current Location Coordinates
   private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        // this.getAddress(this.latitude, this.longitude);
      });
    }
  }
  
  
  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    // this.getAddress(this.latitude, this.longitude);
  }

  


}

