import { OnInit, Component } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../post.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getAllPosts()
    .subscribe(posts => this.posts = posts);
  }
}
