export class PostBodyComponent {
  component: string;
  parameters: Object[];

  constructor(component: string, parameters: Object[]) {
    this.component = component;
    this.parameters = parameters;
  }

}
