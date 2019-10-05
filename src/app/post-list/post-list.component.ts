import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts = [];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.list().subscribe((data: any) => {
      this.posts = data;
    });
  }

}
