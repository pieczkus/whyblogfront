import { Component, OnInit } from '@angular/core';
import { Post, PostService } from '../shared/post/index';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from '../shared/loader/loader.service';
import { SeoService } from '../shared/seo/seo.service';

@Component({
  moduleId: module.id,
  selector: 'wb-post',
  templateUrl: 'post.component.html',
  styleUrls: ['post.component.css'],
})
export class PostComponent implements OnInit {

  post: Post;
  loading = true;
  errorMessage: string;
  state = 'inactive';
  relatedPosts: Post[] = [];

  constructor(public postService: PostService, private route: ActivatedRoute, private loaderService: LoaderService,
              private seoService: SeoService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.route.params.subscribe(params => {
      this.loadPost(params['title']);
    });
  }

  loadPost(title: string) {
    this.postService.getPost(title).subscribe(post => {
        this.post = post;
        setTimeout(() => {
          this.loadRelatedPosts();
        }, 200);
      },
      error => this.errorMessage = error,
      () => {
        this.seoService.setTitle(this.post.metaTitle);
        this.seoService.setMetaDescription(this.post.metaDescription);
        this.seoService.setMetaKeywords(this.post.metaKeywords);
        setTimeout(() => {
          this.state = 'active';
          this.loaderService.hide();
          this.loading = false;
        }, 400);
      });
  }

  loadRelatedPosts(): void {
    this.relatedPosts = [];
    for (const r of this.post.relatedPosts) {
      this.postService.getPostById(r).subscribe(rp => {
        this.relatedPosts.push(rp);
      });
    }
  }

}
