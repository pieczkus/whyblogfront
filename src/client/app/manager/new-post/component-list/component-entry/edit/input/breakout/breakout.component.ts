import { AfterViewInit, Component, Input } from '@angular/core';
import { InputComponent } from '../input.component';
import { PostComponentField } from '../../../../post-component-field';
@Component({
  moduleId: module.id,
  templateUrl: 'breakout.component.html',
  styleUrls: ['breakout.component.css']
})
export class BreakoutComponent implements InputComponent {

  @Input() field: PostComponentField;

}
