import { PostComponentField } from './post-component-field';

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
    return new (this.constructor as typeof PostComponent)(this.name, this.component, this.fields) as this;
  }
}
