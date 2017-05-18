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
    let parameters: Object[] = [];
    for (let f of this.fields) {
      let field: any = {};
      field['name'] = f.name.toLowerCase();
      field['value'] = f.value;
      parameters.push(field);
    }
    return new PostBodyComponent(this.name, parameters);
  }
}
