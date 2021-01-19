import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as Sentry from '@sentry/browser';
import { ApplicationModule } from './app/app.module';
import { RUCKEN_SITE } from './app/data/rucken-site';
import { environment } from './environments/environment';

Sentry.init({
  dsn: RUCKEN_SITE.logger.sentryDsn,
});

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic()
    .bootstrapModule(ApplicationModule)
    .catch((err) => console.error(err));
});
