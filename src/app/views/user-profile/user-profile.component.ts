import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  NgZone
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import {
  UserService
} from 'src/app/shared/services/user.service';
import {
  AgmCoreModule
} from '@agm/core';
import {
  MapsAPILoader,
  MouseEvent
} from '@agm/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user:any;
  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom: number=12;
  
  private geoCoder;
  // title;lat;lng;
  @ViewChild('search')
  public searchElementRef: ElementRef;
 

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.has('id')) {
        const id = paramMap.get('id');
        this.user = this.userService.getUsersById(id).subscribe((res: any) => {
          this.user = res.data;
          console.log("**************");
          console.log(this.user.place.address);
       
        this.latitude=31.0409872;
        this.longitude=31.386410809375020;
     
          console.log("**************");



        });
      }
    });

   

  }




}
