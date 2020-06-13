import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseViewComponent } from './course-view/course-view.component';


const routes: Routes = [
  {
    path: '',
    component: CourseViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseviewRoutingModule { }
