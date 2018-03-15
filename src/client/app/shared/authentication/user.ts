export class User {
  email: string;
  token: string;

  constructor(json: any) {
    this.email = json.email;
    this.token = json.token;
  }
}
