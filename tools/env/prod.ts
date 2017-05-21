import { EnvConfig } from './env-config.interface';

const ProdConfig: EnvConfig = {
  ENV: 'PROD',
  AUTH_API: 'http://localhost/api/auth',
  POST_API: 'http://localhost/api/posts',
  COMMENT_API: 'http://localhost/api/comments',
  API_KEY: 'c1700e46-ddb6-407f-9f99-1d0706271cb7'
};

export = ProdConfig;

