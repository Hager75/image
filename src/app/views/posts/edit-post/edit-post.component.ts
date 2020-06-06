import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { NgForm } from '@angular/forms';
import { PostsService } from 'src/app/shared/services/posts.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  post: Post = new Post();
  // postId: number;
  
  constructor(private _postsService: PostsService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      console.log("prms: "+ params.id);
      
      this.post.id = params.id;
      console.log("post of id");
      
      this._postsService.getPostById(params.id).subscribe((res:any) => {
        console.log(res.data.title);
        this.post = res.data;
        // console.log(this.courseDetails.name);
      });
    });
  }

    //===============================================================

    onSubmit(form: NgForm){
      console.log(form);
      if(form.valid){
        const post = {...this.post};
        this._postsService.updatePost(post,this.post.id).subscribe((res: any)=>{
          console.log(res);
          
          this._router.navigate(['/user/posts']);
    
        });
      }
    }

}
