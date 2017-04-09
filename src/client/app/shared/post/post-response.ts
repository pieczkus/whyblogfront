import { Meta } from './meta';
export class PostResponse {

  meta: Meta;
  response: any;

  constructor(meta: Meta, response: any) {
    this.meta = meta;
    this.response = response;
  }
}
