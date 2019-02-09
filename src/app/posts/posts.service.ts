import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { catchError, map, tap, } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class PostsService {

  private posts: Post[] = [];
  private postUpdated = new Subject<Post[]>();

  postsUrl = 'http://localhost:4000/posts';

  constructor(private http: HttpClient) {}

  // getPost, addPosts uses RxJS Observable to store them locallly
  getPosts() {
    return [...this.posts];
  }

  addPost(title: string, content: string) {
    const post: Post = {
      title, content
    };
    this.posts.push(post);
    this.postUpdated.next([...this.posts]);
  }

  getPostUpdatedListener() {
    return this.postUpdated.asObservable();
  }

  // Using httpClient implementation
  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl)
    .pipe(
      catchError(this.handleError('getPosts', []))
    );
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post)
      .pipe(
        catchError(this.handleError<Post>('createPost'))
    );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
