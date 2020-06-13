import { Component, OnInit } from '@angular/core';
import {
  UserService
} from './../../../shared/services/user.service';
import {user} from './../../../models/user.model';
import { ToastrService } from 'ngx-toastr';
import {
  Router
} from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user;
  userInfo= new user();
    constructor( 
  
      private userService:UserService,
      private activatedRoute:ActivatedRoute,
      private toastr: ToastrService,
      private router:Router) { }
  
      ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe((paramMap)=>{
              if(paramMap.has('id')){
                const id=paramMap.get('id');
                this.user=this.userService.getUsersById(id).subscribe((res:any)=>{
                      this.user=res.data;
                      // console.log(res.data);
                                  
                  });
                }
                });
        
        }
  
  
    onSubmit(){ 

      const  userInfo={...this.user};

  this.userService.updateUser(userInfo).subscribe((res: any)=>{
   
    
    this.toastr.success('User UPdated successfuly', 'success', {timeOut:3000, closeButton: true, progressBar: true});
    this.router.navigate(['../admin/users']);
      });
      
      }
  }
  