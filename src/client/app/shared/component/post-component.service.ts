import { Injectable } from '@angular/core';
import { PostComponent } from '../../manager/new-post/component-list/post-component';
import { PostComponentField } from '../../manager/new-post/component-list/post-component-field';

@Injectable()
export class PostComponentService {

  components: PostComponent[] = [
    new PostComponent('Paragraf', [new PostComponentField('Text', 'text')]),
    new PostComponent('Breakout', [new PostComponentField('Url', 'url')]),
    new PostComponent('YouTube', [new PostComponentField('Url', 'url')]),
    new PostComponent('Quote', [new PostComponentField('Author', 'text'), new PostComponentField('Quote', 'text')])
  ];

  getAvailableComponents(): PostComponent[] {
    return this.components;
  }

  getComponent(name: String): PostComponent {
    return this.components.find(c => c.name === name).clone();
  }
}
