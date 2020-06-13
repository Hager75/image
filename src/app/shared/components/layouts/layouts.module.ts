import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AdminLayoutComponent, UserLayoutComponent, AuthLayoutComponent, BlankLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ]
})
export class LayoutsModule { }
