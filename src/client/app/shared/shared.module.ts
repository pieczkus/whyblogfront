import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SidenavComponent } from './sidenav/sidenav.component';
import { PostService } from './post/post.service';
import { PostListComponent } from './post-list/post-list.component';
import { PostTileComponent } from './post-list/post-tile/post-tile.component';
import { ReadPostButtonComponent } from './read-post-button/read-post-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthGuard } from './guards/auth.guard';
import { PostComponentService } from './component/post-component.service';
import { CommentService } from './comment/comment.service';
import { HttpClient } from './http/http.client';
import { LoaderComponent, LoaderService } from './loader/index';
import { BlogMaterialModule } from './blog-material.module';

@NgModule({
  imports: [CommonModule, RouterModule, BlogMaterialModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule],
  declarations: [SidenavComponent, PostListComponent, PostTileComponent, LoaderComponent,
    ReadPostButtonComponent, LoginComponent],
  exports: [BlogMaterialModule, SidenavComponent, PostListComponent, PostTileComponent,
    ReadPostButtonComponent, CommonModule, FormsModule, RouterModule, BrowserAnimationsModule,
    LoginComponent, LoaderComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [PostService, AuthenticationService, AuthGuard, PostComponentService, CommentService, HttpClient, LoaderService]
    };
  }
}
