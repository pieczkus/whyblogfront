import { Component, OnInit } from '@angular/core';
import { PostService } from '../../shared/post/post.service';

@Component({
  moduleId: module.id,
  selector: 'wb-post-nav-component',
  templateUrl: 'post-nav.component.html',
  styleUrls: ['post-nav.component.css']
})
export class PostNavComponent implements OnInit {

  nextPostTitle: string;
  prevPostTitle: string;

  constructor(public postService: PostService) {

  }

  ngOnInit(): void {
    this.postService.getNextPost().subscribe(post => {
      this.nextPostTitle = post.title;
    });
    this.postService.getPrevPost().subscribe(post => {
      this.prevPostTitle = post.title;
    });
  }

}
