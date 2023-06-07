import { CapacitorConfig } from '@capacitor/cli';
import {environment} from './src/environments/environment.prod';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'GymTracker',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    allowNavigation: [
      'https://gym-tracker.schweng.xyz/api/**'
    ]
  },
  plugins: {
    CapacitorHttp: {
      enabled: true
    }
  }
};

export default config;
