import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { loginuser } from 'src/app/models/loginuser.model';
import { UserService } from 'src/app/shared/services/user.service';
// import {UserService} from '../users/services/user.service';
// import {loginuser} from './loginUser.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new loginuser();

  constructor(
    private userService: UserService,
    private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {

    const user = {
      ...this.user
    };



    this.userService.singIn(user).subscribe((res: any) => {
      if (res.success) {
        this.userService.setToken(res.data);
        this.router.navigate(['/user/posts']);
      
      }else{
          console.log("untrusgh user");
        this.router.navigate(['/login']);

      }


    });

  }


}
