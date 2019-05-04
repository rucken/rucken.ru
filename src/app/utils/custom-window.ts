import { FactoryProvider, InjectionToken } from '@angular/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomWindow {
  navigator: any;
  location: any;
  localStorage: any;
  process?: any;
  require?: any;
}

export const CUSTOM_WINDOW = new InjectionToken<CustomWindow>('CUSTOM_WINDOW');

export const customWindowProvider: FactoryProvider = {
  provide: CUSTOM_WINDOW,
  useFactory: () => window
};

export const CUSTOM_WINDOW_PROVIDERS = [
  customWindowProvider
];
