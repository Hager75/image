import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminLayoutComponent} from './shared/components/layouts/admin-layout/admin-layout.component';
import {UserLayoutComponent} from './shared/components/layouts/user-layout/user-layout.component';
import {BlankLayoutComponent} from './shared/components/layouts/blank-layout/blank-layout.component';


const routes: Routes = [
  {
    path: '',
    component: BlankLayoutComponent,
    children:[
      {
        path: '',
        loadChildren: () => import('./views/pages/pages.module').then(m => m.PagesModule )
      }
    ]
  },
  
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children:[
      {
        path: 'courses',
        loadChildren: () => import('./views/courses/courses.module').then(m => m.CoursesModule )
      },
      {
        path: 'products',
        loadChildren: () => import('./views/products/products.module').then(m => m.ProductsModule )
      },
      {
        path: 'events',
        loadChildren: () => import('./views/events/events.module').then(m => m.EventsModule )
      },
    ]
  },
  {
    path: 'user',
    component: UserLayoutComponent,
    children:[
      {
        path: 'posts',
        loadChildren: () => import('./views/posts/posts.module').then(m => m.PostsModule )
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
