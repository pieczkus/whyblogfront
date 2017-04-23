export class PostComponentField {

  name: string;
  type: string;
  value: string;

  constructor(name: string, type: string) {
    this.name = name;
    this.type = type;
  }

  clone(): PostComponentField {
    return new (this.constructor as typeof PostComponentField)(this.name, this.type) as this;
  }
}
