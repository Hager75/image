import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryViewComponent } from './category-view/category-view.component';




const routes: Routes = [
  {
    path: '',
    component: CategoryViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryviewRoutingModule { }
