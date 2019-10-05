import { Component, OnInit, Input, OnDestroy, EventEmitter, Output } from '@angular/core';
import PostDTO from '../models/PostDTO';
import { FormBuilder, Form, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {
  @Input() mode: string;
  @Input() post: PostDTO;
  @Output() valid = new EventEmitter<boolean>();
  @Output() postUpdated = new EventEmitter<PostDTO>();

  postForm: FormGroup;
  formSubscription: any;

  constructor(private formBuilder: FormBuilder) {
    this.postForm = this.formBuilder.group({
      id: '',
      title: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      content: new FormControl('', [Validators.required, Validators.maxLength(10000)]),
      lat: new FormControl('',),
      long: new FormControl(''),
      image_url: new FormControl('')
    });
  }

  ngOnInit() {
    this.formSubscription = this.postForm.statusChanges.subscribe((data: any) => {
      // When the form changes state, we fire two events, one with the valid status, and another with the current DTO
      this.valid.emit(data === 'VALID');
      const post = {
                    id: null,
                    title: this.postForm.get('title').value,
                    content: this.postForm.get('content').value,
                    lat: this.postForm.get('lat').value,
                    long: this.postForm.get('long').value,
                    image_url: this.postForm.get('image_url').value
                  };
      this.postUpdated.emit(post);
    });
  }

  ngOnDestroy() {
    this.formSubscription.unsubscribe();

  }

}
