import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';
// import { UserService } from '../users/services/user.service';
// import { user } from '../users/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user= new user();
  constructor(
     private userService:UserService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
    onSubmit(){   
      const user={...this.user};

      this.userService.addUser(user).subscribe((res: any)=>{
      this.userService.setToken(res);
      this.router.navigate(['/user/posts',]);
    
    });
    
    }

}
