import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/shared/services/posts.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts: any=[];
 
  constructor(private _postsService: PostsService,
    private toastr: ToastrService) { }
//===============================================================================
  getPosts(){
    console.log("get posts Component");
   
    this._postsService.getPosts().subscribe((res: any) =>{
     console.log(res.body.links);
    this.posts = res.body.data;
    });
  }
//===============================================================================

public firstPage() {
  this.posts = [];
  this._postsService.sendGetRequestToUrl(this._postsService.first).subscribe((res: any) => {
    console.log(res);
    this.posts = res.body.data;
  })
}

// //===============================================================

public previousPage() {

  if (this._postsService.prev !== undefined && this._postsService.prev !== null) {
    this.posts = [];
    this._postsService.sendGetRequestToUrl(this._postsService.prev).subscribe((res:any) => {
      console.log(res);
      this.posts = res.body.data;
    })
  }

}
// //=============================================================================

public nextPage() {
  if (this._postsService.next !== undefined && this._postsService.next !== null) {
    this.posts = [];
    this._postsService.sendGetRequestToUrl(this._postsService.next).subscribe((res:any) => {
      console.log(res);
      this.posts = res.body.data;
    })
  }
}

// //====================================================================================

public lastPage() {
  this.posts = [];
  this._postsService.sendGetRequestToUrl(this._postsService.last).subscribe((res: any) => {
    console.log(res);
    this.posts = res.body.data;
  })
}
//================================================================================
deleteItem(id:number){
  console.log("delete");
  
    this._postsService.deletePost(id).subscribe((res:any )=> {
      console.log("hello");
      
      this.toastr.success('post deleted successfuly', 'success', {timeOut:1000, closeButton: true, progressBar: true});
      console.log("delete res: "+res);
      
      this.getPosts();
  });
}

//================================================================================
  ngOnInit(): void {
    this.getPosts();
  }

}
