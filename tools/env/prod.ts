import { EnvConfig } from './env-config.interface';

const ProdConfig: EnvConfig = {
  ENV: 'PROD',
  AUTH_API: 'http://localhost/api/auth',
  POST_API: 'http://localhost/api/posts',
  API_KEY: '55bd0e94-2990-47c0-a43f-63b9a394a690'
};

export = ProdConfig;

