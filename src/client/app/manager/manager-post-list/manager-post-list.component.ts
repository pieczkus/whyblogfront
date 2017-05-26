import { Component, OnInit } from '@angular/core';
import { PostService } from '../../shared/post/post.service';
import { Post } from '../../shared/post/post';
import { Observable } from 'rxjs/Observable';
import { LoaderService } from '../../shared/loader/loader.service';

@Component({
  moduleId: module.id,
  selector: 'wb-manager-post-list',
  templateUrl: 'manager-post-list.component.html',
  styleUrls: ['manager-post-list.component.css'],
})
export class ManagerPostListComponent implements OnInit {

  posts: Post[];
  loading = false;
  errorMessage: string;
  notPublishedPosts: Post[];

  constructor(private postService: PostService, private loaderService: LoaderService) {
  }

  ngOnInit(): void {
    Observable.forkJoin(this.postService.getPosts(0, 0), this.postService.getNotPublishedPosts()).subscribe(res => {
        console.log(res[0]);
        console.log(res[1]);
        this.posts = res[0];
        this.notPublishedPosts = res[1];
      },
      err => this.errorMessage = err,
      () => {
        this.loaderService.hide();
        this.loading = false;
      });
  }

  publish(title: string) {
    this.postService.publishPost(title).subscribe(res => {
    });
  }


}
