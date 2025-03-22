import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'waste-recognition',
  webDir: 'dist/waste-recognition/browser',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: false,
      backgroundColor: '#07674B',
      androidSplashResourceName: 'splash',
      showSpinner: true,
      spinnerStyle: 'fade',
      spinnerColor: '##D9D9D9',
    },
  },
};

export default config;
