import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { MetaLoader, MetaModule } from '@ngx-meta/core';
import { Angulartics2Module } from 'angulartics2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './components/footer/footer.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { UrlInterceptor } from './interceptors/url-interceptor';
import { metaFactory } from './utils/meta-factory';
import { SentryErrorHandler } from './utils/sentry-error-handler';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ruckenRu' }),
        HttpClientModule,
        NavbarModule,
        FooterModule,
        BrowserAnimationsModule,
        NgxGalleryModule,
        AppRoutingModule,
        MetaModule.forRoot({
            provide: MetaLoader,
            useFactory: metaFactory,
        }),
        Angulartics2Module.forRoot(),
        // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: UrlInterceptor,
            multi: true,
        },
        { provide: ErrorHandler, useClass: SentryErrorHandler },
    ],
    bootstrap: [AppComponent],
})
export class ApplicationModule {}
