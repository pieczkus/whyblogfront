import { Component, Input } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'wb-read-post-button',
  templateUrl: 'read-post-button.component.html',
  styleUrls: ['read-post-button.component.css'],
})
export class ReadPostButtonComponent {

  @Input() postTitle: string;
  @Input() timeToRead: string;

}
