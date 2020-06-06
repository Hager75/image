import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseShowComponent } from './course-show/course-show.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseAddComponent } from './course-add/course-add.component';


const routes: Routes = [
  {
    path: '',
    component: CoursesListComponent
  },
  {
    path: 'show/:id',
    component: CourseShowComponent
  },
  {
    path: 'edit/:id',
    component: CourseEditComponent
  },
  {
    path: 'add',
    component: CourseAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
