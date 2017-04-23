import { AfterViewInit, Component, Input } from '@angular/core';
import { InputComponent } from '../input.component';
import { PostComponentField } from '../../../../post-component-field';
@Component({
  moduleId: module.id,
  templateUrl: 'text.component.html',
  styleUrls: ['text.component.css']
})
export class TextComponent implements InputComponent {

  @Input() field: PostComponentField;

}
