import { Component } from '@angular/core';
import { BaseBodyComponent } from '../base-component';

@Component({
  moduleId: module.id,
  selector: 'wb-breakout-component',
  templateUrl: 'breakout.component.html',
  styleUrls: ['breakout.component.css']
})
export class BreakoutComponent implements BaseBodyComponent {

  parameters: Map<string, string>;

  getImageUrl() {
    return this.parameters.get('url');
  }

  getImageTitle() {
    return this.parameters.get('title');
  }

}
