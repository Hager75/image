import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminLayoutComponent} from './shared/components/layouts/admin-layout/admin-layout.component';
import {UserLayoutComponent} from './shared/components/layouts/user-layout/user-layout.component';
import {BlankLayoutComponent} from './shared/components/layouts/blank-layout/blank-layout.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { UserProfileComponent } from './views/user-profile/user-profile.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  // {
  //   path: '',
  //   component: BlankLayoutComponent,
  //   children:[
  //     {
  //       path: '',
  //       loadChildren: () => import('./views/pages/pages.module').then(m => m.PagesModule )
  //     }
  //   ]
  // },
  
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children:[
      {
        path: 'courses',
        loadChildren: () => import('./views/courses/courses.module').then(m => m.CoursesModule )
      },
      {
        path: 'categories',
        loadChildren: () => import('./views/categories/categories.module').then(m => m.CategoriesModule )
      },
      {
        path: 'products',
        loadChildren: () => import('./views/products/products.module').then(m => m.ProductsModule )
      },
      {
        path: 'events',
        loadChildren: () => import('./views/events/events.module').then(m => m.EventsModule )
      },
      {
          path: 'users',
        loadChildren: () => import('./views/users/users.module').then(m => m.UsersModule )
      },
    ]
  },
  {
    path: 'user',
    component: UserLayoutComponent,
    children:[
      {
        path: 'courses',
        loadChildren: () => import('./views/courseview/courseview.module').then(m => m.CourseviewModule )

      },
      {
        path: 'courseview',
        loadChildren: () => import('./views/courseview/courseview.module').then(m => m.CourseviewModule )
      },
      {
        path: 'products',
        loadChildren: () => import('./views/productview/productview.module').then(m => m.ProductviewModule )

      },
      {
        path: 'productview',
        loadChildren: () => import('./views/productview/productview.module').then(m => m.ProductviewModule )
      },
      {
        path: 'categoryview',
        loadChildren: () => import('./views/categoryview/categoryview.module').then(m => m.CategoryviewModule )
      },
      // {
      //   path: 'posts',
      //   loadChildren: () => import('./views/courseview/courseview.module').then(m => m.CourseviewModule ),
      // },
      {
        path: 'posts',
        loadChildren: () => import('./views/posts/posts.module').then(m => m.PostsModule)
      },
      {
        path:'profile/:id',
        component: UserProfileComponent,
      }
    ]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
