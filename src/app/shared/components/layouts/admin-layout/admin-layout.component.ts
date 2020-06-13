import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  auth:any;
  
  
  constructor(
    private userService:UserService,
    private router:Router
    ) { }
    
    ngOnInit(): void {
      this.auth=this.userService.isAuthenticated();
    }

  logout(){  
        this.userService.signOut();
        this.router.navigate(['/login']);
  }

}
