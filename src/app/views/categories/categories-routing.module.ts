import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesShowComponent } from './category-show/category-show.component';
import { CategoriesEditComponent } from './category-edit/category-edit.component';
import { CategoriesAddComponent } from './category-add/category-add.component';


const routes: Routes = [
  {
    path: '',
    component: CategoriesListComponent
  },
  {
    path: 'show/:id',
    component: CategoriesShowComponent
  },
  {
    path: 'edit/:id',
    component: CategoriesEditComponent
  },
  {
    path: 'add',
    component: CategoriesAddComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
