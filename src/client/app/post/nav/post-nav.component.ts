import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { PostService } from '../../shared/post/post.service';

@Component({
  moduleId: module.id,
  selector: 'wb-post-nav-component',
  templateUrl: 'post-nav.component.html',
  styleUrls: ['post-nav.component.css']
})
export class PostNavComponent implements OnChanges {

  @Input() publishedOn: number;
  nextPostTitle: string;
  prevPostTitle: string;

  constructor(public postService: PostService) {
  }

  ngOnChanges(changes: { [ propName: string]: SimpleChange }): void {
    const change = changes['publishedOn'].currentValue;
    if (change) {
      this.nextPostTitle = null;
      this.prevPostTitle = null;
      this.postService.getNextPost(this.publishedOn).subscribe(post => {
        this.nextPostTitle = post.title;
      });
      this.postService.getPrevPost(this.publishedOn).subscribe(post => {
        this.prevPostTitle = post.title;
      });
    }
  }

}
