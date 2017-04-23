import { AfterViewInit, Component, Input } from '@angular/core';
import { InputComponent } from '../input.component';
import { PostComponentField } from '../../../../post-component-field';
@Component({
  moduleId: module.id,
  templateUrl: 'url.component.html',
  styleUrls: ['url.component.css']
})
export class UrlComponent implements InputComponent {

  @Input() field: PostComponentField;

}
