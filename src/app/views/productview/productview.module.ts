import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductviewRoutingModule } from './productview-routing.module';
import { ProductViewComponent } from './product-view/product-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProductViewComponent],
  imports: [
    CommonModule,
    ProductviewRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductviewModule { }
