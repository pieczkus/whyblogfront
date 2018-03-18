import { Component, Input, OnInit } from '@angular/core';
import { PostComponentService } from '../../../shared/component/post-component.service';
import { PostComponent } from './post-component';

const defaultComponent = 'Paragraf';

@Component({
  moduleId: module.id,
  selector: 'wb-component-list',
  templateUrl: 'component-list.component.html',
  styleUrls: ['component-list.component.css'],
})
export class ComponentListComponent {

  @Input() components: PostComponent[];

  constructor(public postComponentsService: PostComponentService) {
  }

  addComponent() {
    this.components.push(this.postComponentsService.getComponent(defaultComponent));
  }

}
