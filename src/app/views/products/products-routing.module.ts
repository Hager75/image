import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductShowComponent } from './product-show/product-show.component';
import { ProductEditComponent } from './product-edit/product-edit.component';


const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent
  },
  {
    path: 'add',
    component: ProductAddComponent
  },
  {
    path: 'show/:id',
    component: ProductShowComponent
  },
  {
    path: 'edit/:id',
    component: ProductEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
