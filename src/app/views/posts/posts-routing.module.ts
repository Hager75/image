import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';


const routes: Routes = [
  {
    path:'',
    component: PostsListComponent,
  },
  {
    path: 'edit/:id',
    component: EditPostComponent
  },
  {
    path:'new',
    component: AddPostComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
