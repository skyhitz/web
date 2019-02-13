import { ProductionConfig } from './config.production';
import { DevelopmentConfig } from './config.development';

function getConfig() {
  if (process.env.SKYHITZ_ENV === 'production') {
    return ProductionConfig;
  }
  return DevelopmentConfig;
}

export const Config = getConfig();
