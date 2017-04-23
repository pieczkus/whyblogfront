export class PostBodyComponent {
  component: string;
  parameters: Map<string, string>;

  constructor(component: string) {
    this.component = component;
    this.parameters = new Map();
  }

  addParameter(name: string, value: string) {
    this.parameters.set(name, value);
  }
}
