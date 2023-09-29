import { EnvService } from './env.service';

export const EnvServiceFactory = () => {

  let env: any = new EnvService();

  const browserWindow: any = window || {};
  const browserWindowEnv: any = browserWindow['__env'] || {};
  
  env = Object.assign(env,browserWindowEnv)

  return env;
};

export const EnvServiceProvider = {
  provide: EnvService,
  useFactory: EnvServiceFactory,
  deps: [],
}
