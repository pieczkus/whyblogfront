import { PostComponentField } from './post-component-field';
import { PostBodyComponent } from '../../../shared/post/post-body-component';

export class PostComponent {
  name: string;
  fields: PostComponentField[];

  constructor(name: string, fields: PostComponentField[]) {
    this.name = name;
    this.fields = fields;
  }

  clone(): PostComponent {
    const clonedFields: PostComponentField[] = [];
    for (const field of this.fields) {
      clonedFields.push(field.clone());
    }
    return new (this.constructor as typeof PostComponent)(this.name, clonedFields) as this;
  }

  toBodyComponent(): PostBodyComponent {
    const parameters: Object[] = [];
    for (const f of this.fields) {
      const field: any = {};
      field['name'] = f.name.toLowerCase();
      field['value'] = f.value;
      parameters.push(field);
    }
    return new PostBodyComponent(this.name, parameters);
  }
}
