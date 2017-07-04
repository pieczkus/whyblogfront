import { EnvConfig } from './env-config.interface';

const ProdConfig: EnvConfig = {
  ENV: 'PROD',
  AUTH_API: '/api/auth',
  POST_API: '/api/posts',
  COMMENT_API: '/api/comments',
  API_KEY: 'ea9a28e6-9c83-4fc7-8bc2-16e061060eae'
};

export = ProdConfig;

