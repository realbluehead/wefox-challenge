import { Injectable } from '@angular/core';
import PostDTO from './models/PostDTO';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  private apiUrl = 'https://wf-challenge-abqs4otg74.herokuapp.com/api/v1';

  constructor(private httpClient: HttpClient) { }

  public list() {
    const serviceUrl = `${this.apiUrl}/posts`;
    return  this.httpClient.get(serviceUrl);
  }
  public show(post: PostDTO) {
    const id = post.id;
    const serviceUrl = `${this.apiUrl}/posts/${id}`;
    return  this.httpClient.get(serviceUrl);
  }

  public create(post: PostDTO) {
    const serviceUrl = `${this.apiUrl}/posts`;
    return  this.httpClient.post(serviceUrl, post);
  }

  public update(post: PostDTO) {
    const id = post.id;
    const serviceUrl = `${this.apiUrl}/posts/${id}`;
    return  this.httpClient.put(serviceUrl, post);
  }

  public remove(post: PostDTO) {
    const id = post.id;
    const serviceUrl = `${this.apiUrl}/posts/${id}`;
    return  this.httpClient.delete(serviceUrl);
  }

}
