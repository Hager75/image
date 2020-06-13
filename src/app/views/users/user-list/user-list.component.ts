import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import {
  UserService
} from './../../../shared/services/user.service';
import {
  Router
} from '@angular/router';
import {
  ToastrService
} from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
 
  users: any[];
  auth:any;
 


  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.auth=this.userService.isAuthenticated();
    this.Allusers();
    
  }
  Allusers() {
    this.userService.getUsers().subscribe((res: any) => {

      this.users = res.data;
     
      


    });

  }

  // showUser(id){
  //   this.router.navigate(['/users','profile',id]);

  // }

  deleteUsers(id) {
    this.userService.deleteUser(id).subscribe((res: any) => {
        this.toastr.success('user deleted successfuly', 'success', {
          timeOut: 3000,
          closeButton: true,
          progressBar: true
        });
        console.log(res);

        this.Allusers();
      },
      err => {
        this.toastr.error(err.statusText, 'Error!', {
          timeOut: 3000,
          closeButton: true,
          progressBar: true
        });
        console.log(err);


      }
    );
  }

  onClickUpdate(id) {
    this.router.navigate(['/users', id, 'edit']);

  }



}
