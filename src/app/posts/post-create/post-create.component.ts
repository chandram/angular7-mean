import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {

  // newPost = '';
  enteredValue = '';
  enteredTitle = '';

  // @Output() postCreated = new EventEmitter<Post>();

  constructor(public postService: PostsService) {}

  /* onAddPost(postInput: HTMLTextAreaElement) {
    // this.newPost = 'the user post';
    console.dir(postInput);
    this.newPost = postInput.value;
  } */

  // Core binding concepts
  // Event Binding  (click)="onAddPost()"
  // String interpolation {{}}
  // Property Binding [value]="newPost" #postInput
  // two way binding [(ngModel)]="enteredValue"

  /* onAddPost() {
    const post: Post = {
      title: this.enteredTitle,
      content: this.enteredValue
     };
    // this.newPost = this.enteredValue;
    this.postCreated.emit(post);
  } */


  onAddPost(form: NgForm) {

    if (form.invalid) {
      return;
    }

    const post: Post = {
      title: form.value.title,
      content: form.value.content
     };
    // this.newPost = this.enteredValue;
    // this.postCreated.emit(post);
    this.postService.addPost(form.value.title, form.value.content)
    form.resetForm();
  }

  createPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const post: Post = {
      title: form.value.title,
      content: form.value.content
     };
    this.postService.createPost(post)
    .subscribe(newpost => {
      console.log('Create Post Response ', newpost);
      form.resetForm();
    });
  }


}
