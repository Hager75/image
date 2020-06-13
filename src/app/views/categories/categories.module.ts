import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryShowComponent } from './category-show/category-show.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';


@NgModule({
  declarations: [CategoriesListComponent, CategoryAddComponent, CategoryEditComponent, CategoryShowComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CategoriesModule { }
