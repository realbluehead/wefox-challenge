import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import PostDTO from '../models/PostDTO';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts = [];
  deleteModalOpen = false;
  showModalOpen = false;
  editModalOpen = false;
  newModalOpen = false;
  currentPost = null;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.retrievePosts();
  }

  retrievePosts() {
    this.postService.list().subscribe((data: any) => {
      this.posts = data;
    });
  }

  onDelete(post: PostDTO) {
    this.currentPost = post;
    this.deleteModalOpen  = true;
  }
  cancelPostDeletion() {
    this.deleteModalOpen = false;
  }

  doPostDeletion() {
    this.deleteModalOpen = false;
    /*this.postService.remove(this.currentPost).subscribe((data: any) =>{
      this.retrievePosts();
    });*/
  }

  hideShowPostModal() {
    this.showModalOpen = false;
  }

  onEdit(post: PostDTO) {
    this.currentPost = post;
    this.editModalOpen = true;
  }

  cancelPostEdition() {
    this.editModalOpen = false;
  }
  doPostEdition() {
    this.editModalOpen = false;
   /* this.postService.update(this.currentPost).subscribe((data:any) => {
      this.retrievePosts();
    });*/
  }

  onNew() {
    this.newModalOpen = true;
  }
  cancelPostCreation() {
    this.newModalOpen = false;
  }

  doPostCreation() {
    this.newModalOpen = false;
    /* this.postService.create(this.currentPost).subscribe((data:any) => {
      this.retrievePosts();
    });*/
  }
}
