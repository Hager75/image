import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseShowComponent } from './course-show/course-show.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseAddComponent } from './course-add/course-add.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
// import {  FormsModule} from '@angular/forms';


@NgModule({
  declarations: [CoursesListComponent, CourseShowComponent, CourseEditComponent, CourseAddComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CoursesModule { }
