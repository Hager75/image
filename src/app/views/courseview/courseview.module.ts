import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseviewRoutingModule } from './courseview-routing.module';
import { CourseViewComponent } from './course-view/course-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// search module
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [CourseViewComponent],
  imports: [
    CommonModule,
    CourseviewRoutingModule,
    FormsModule,
    ReactiveFormsModule
    // Ng2SearchPipeModule,
    // BrowserModule
  ]
})
export class CourseviewModule { }
