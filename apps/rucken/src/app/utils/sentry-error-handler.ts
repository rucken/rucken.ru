import { isPlatformBrowser } from '@angular/common';
import { ErrorHandler, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import * as Sentry from '@sentry/browser';

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}
  handleError(error) {
    if (isPlatformBrowser(this.platformId)) {
      const eventId = Sentry.captureException(error.originalError || error);
      Sentry.showReportDialog({ eventId });
    }
  }
}
