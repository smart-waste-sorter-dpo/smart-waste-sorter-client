import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'onboarding',
    loadComponent: () =>
      import('./onboarding/onboarding.component').then(
        (m) => m.OnboardingComponent
      ),
  },
  {
    path: 'scan',
    loadComponent: () =>
      import('./scan/component/scan.component').then((m) => m.ScanComponent),
  },
  {
    path: 'success',
    loadComponent: () =>
      import('./layers/success-layer.component').then(
        (m) => m.SuccessLayerComponent
      ),
  },
  {
    path: 'error',
    loadComponent: () =>
      import('./layers/error-layer/error-layer.component').then(
        (m) => m.ErrorLayerComponent
      ),
  },
  {
    path: '',
    redirectTo: 'scan',
    pathMatch: 'full',
  },
];
