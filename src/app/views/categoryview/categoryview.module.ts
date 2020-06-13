import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryviewRoutingModule } from './categoryview-routing.module';
import { CategoryViewComponent } from './category-view/category-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CategoryViewComponent],
  imports: [
    CommonModule,
    CategoryviewRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CategoryviewModule { }
