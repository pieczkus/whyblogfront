import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'wb-post-tags-component',
  templateUrl: 'post-tags.component.html',
  styleUrls: ['post-tags.component.css']
})
export class PostTagsComponent {

  @Input() tags: string[];

}
