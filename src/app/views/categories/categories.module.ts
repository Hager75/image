import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryListComponent } from '../category-list/category-list.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryShowComponent } from './category-show/category-show.component';
import { CategotiesListComponent } from './categoties-list/categoties-list.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';


@NgModule({
  declarations: [CategoryListComponent, CategoryAddComponent, CategoryEditComponent, CategoryShowComponent, CategotiesListComponent, CategoriesListComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
