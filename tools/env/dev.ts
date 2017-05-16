import { EnvConfig } from './env-config.interface';

const DevConfig: EnvConfig = {
  ENV: 'DEV',
  AUTH_API: 'http://localhost:9000/v1/auth',
  AUTH_KEY: ''
};

export = DevConfig;

