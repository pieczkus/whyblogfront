// Feel free to extend this interface
// depending on your app specific config.
export interface EnvConfig {
  ENV?: string;
  AUTH_API?: string;
  POST_API?: string;
  COMMENT_API?: string;
  API_KEY?: string;
  VERSION?: string;
}
