import { PostComponentField } from './post-component-field';
import { PostBodyComponent } from '../../../shared/post/post-body-component';

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

  toBodyComponent(): PostBodyComponent {
    let parameters: Map<string, string> = new Map();
    for (let f of this.fields) {
      parameters.set(f.name, f.value);
    }
    //let bodyComponent = new PostBodyComponent(this.name, parameters);
    return new PostBodyComponent(this.name, []);
  }
}
