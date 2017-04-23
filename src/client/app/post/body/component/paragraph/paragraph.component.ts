import { Component } from '@angular/core';
import { BaseBodyComponent } from '../base-component';

@Component({
  moduleId: module.id,
  selector: 'wb-paragraph-component',
  templateUrl: 'paragraph.component.html',
  styleUrls: ['paragraph.component.css']
})
export class ParagraphComponent implements BaseBodyComponent {

  parameters: Map<string, string>;

  getParagraphText(): string {
    return this.parameters.get('text');
  }

}
