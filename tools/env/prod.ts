import { EnvConfig } from './env-config.interface';

const ProdConfig: EnvConfig = {
  ENV: 'PROD',
  AUTH_API: 'http://localhost/api/auth',
  AUTH_KEY: ''
};

export = ProdConfig;

