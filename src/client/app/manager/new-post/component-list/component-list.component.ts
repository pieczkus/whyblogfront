import { Component, OnInit } from '@angular/core';
import { PostComponentService } from '../../../shared/component/post-component.service';
import { PostComponent } from './post-component';

@Component({
  moduleId: module.id,
  selector: 'wb-component-list',
  templateUrl: 'component-list.component.html',
  styleUrls: ['component-list.component.css'],
})
export class ComponentListComponent implements OnInit {

  availableComponents: PostComponent[];
  components: PostComponent[] = [];
  selectedComponent: string;

  constructor(public postComponentsService: PostComponentService) {
  }

  ngOnInit(): void {
    this.availableComponents = this.postComponentsService.getAvailableComponents();
  }

  addComponent() {
    this.components.push(this.postComponentsService.getComponent(this.selectedComponent));
    this.selectedComponent = '';
  }

}
