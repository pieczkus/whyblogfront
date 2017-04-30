import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'wb-tag-link-component',
  templateUrl: 'tag-link.component.html',
  styleUrls: ['tag-link.component.css']
})
export class PostTagLinkComponent {

  public static readonly POST_TAG_PREFIX = '/tag/';

  @Input() tag: string;


  routerLink(): string {
    return PostTagLinkComponent.POST_TAG_PREFIX + this.tag;
  }
}
