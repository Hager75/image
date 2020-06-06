import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/shared/services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  post: Post = new Post();
  emptyValue1: string = ''; //to empty input text after submission
  emptyValue2: string = '';

  //=============================================================
  constructor(private _postsService: PostsService, private _router: Router) { }

  //==============================================================
  ngOnInit(): void {
  }

  //===============================================================

  onSubmit(form: NgForm){
    console.log(form);
    if(form.valid){
      const post = {...this.post};
      this._postsService.addPost(post).subscribe((res: any)=>{
        console.log(res);
        this.emptyValue1 = '';
        this.emptyValue2 = '';
        this._router.navigate(['/user/posts']);
  
      });
    }
  }

}
