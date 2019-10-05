import { Component, OnInit, Input } from '@angular/core';
import PostDTO from '../models/PostDTO';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() mode: string;
  @Input() post: PostDTO;

  constructor() {

  }

  ngOnInit() {
  }

}
