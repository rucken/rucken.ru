import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';

import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from './app/app.server.module';
