import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin';
  arr = [1,2,3,4]; 

  constructor(private toastr: ToastrService) {}
 
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
