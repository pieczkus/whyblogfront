import { Component, OnInit, ViewChild } from '@angular/core';
import { ComponentListComponent } from './component-list/component-list.component';
import { Post } from '../../shared/post/post';

@Component({
  moduleId: module.id,
  selector: 'wb-new-post',
  templateUrl: 'new-post.component.html',
  styleUrls: ['new-post.component.css'],
})
export class NewPostComponent implements OnInit {

  post: Post;
  tags: string;

  @ViewChild(ComponentListComponent)
  private componentList: ComponentListComponent;

  ngOnInit(): void {
    this.post = new Post();
  }

  savePost() {
    if (this.validateFields()) {
      let bodyComponents = [];
      for (let p of this.componentList.components) {
        bodyComponents.push(p.toBodyComponent());
      }
      this.post.body = bodyComponents;
      this.post.tags = this.tags.split('|');
      console.log(this.post);
    }
  }

  validateFields(): boolean {
    for (let comp of this.componentList.components) {
      for (let field of comp.fields) {
        if (!field.value || field.value === '') {
          return false;
        }
      }
    }
    return true;
  }

}
