import { EnvConfig } from './env-config.interface';

const DevConfig: EnvConfig = {
  ENV: 'DEV',
  AUTH_API: 'http://localhost:9000/v1/auth',
  POST_API: 'http://localhost:9000/v1/posts',
  API_KEY: 'a635843c-a778-4543-8ee2-65c52793fa79'
};

export = DevConfig;

