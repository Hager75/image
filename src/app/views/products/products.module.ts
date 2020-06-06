import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductShowComponent } from './product-show/product-show.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';



@NgModule({
  declarations: [ProductsListComponent, ProductAddComponent, ProductEditComponent, ProductShowComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProductsModule { }
