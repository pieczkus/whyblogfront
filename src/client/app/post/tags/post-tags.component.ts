import { Component, Input, OnInit } from '@angular/core';
import { ProfileService } from '../../shared/profile/profile.service';
import { Profile } from '../../shared/profile/profile';

@Component({
  moduleId: module.id,
  selector: 'wb-post-tags-component',
  templateUrl: 'post-tags.component.html',
  styleUrls: ['post-tags.component.css']
})
export class PostTagsComponent {

  @Input() tags: string[];

}
