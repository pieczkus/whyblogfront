import { PostComponentField } from './post-component-field';
import { BodyComponent } from '../../../shared/post/body-component';

export class PostComponent {
  name: string;
  component: string;
  fields: PostComponentField[];

  constructor(name: string, component: string, fields: PostComponentField[]) {
    this.name = name;
    this.component = component;
    this.fields = fields;
  }

  clone(): PostComponent {
    let clonedFields: PostComponentField[] = [];
    for (let field of this.fields) {
      clonedFields.push(field.clone());
    }
    return new (this.constructor as typeof PostComponent)(this.name, this.component, clonedFields) as this;
  }

  toBodyComponent(): BodyComponent {
    let bodyComponent = new BodyComponent(this.name);
    for (let f of this.fields) {
      bodyComponent.addParameter(f.name, f.value);
    }
    return bodyComponent;
  }
}
