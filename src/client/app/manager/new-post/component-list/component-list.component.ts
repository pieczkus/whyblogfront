import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'wb-component-list',
  templateUrl: 'component-list.component.html',
  styleUrls: ['component-list.component.css'],
})
export class ComponentListComponent {

  availableComponents: any[];
  components: any[];

}
