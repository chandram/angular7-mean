import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, Router} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {MatInputModule, MatCardModule, MatButtonModule,
   MatToolbarModule, MatExpansionModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './posts/post-list/post-list.component';
// import { PostsService } from './posts/posts.service';

const routes: Routes = [
  {path: 'posts', component: PostListComponent},
  {path: 'posts/create', component: PostCreateComponent},
  {path: '', redirectTo: 'posts', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostCreateComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    // PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
