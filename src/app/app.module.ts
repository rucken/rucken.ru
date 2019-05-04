import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxGalleryModule } from 'ngx-gallery';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './components/footer/footer.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { MetaLoader, MetaModule } from '@ngx-meta/core';
import { metaFactory } from './utils/meta-factory';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    NavbarModule,
    FooterModule,
    BrowserAnimationsModule,
    NgxGalleryModule,
    AppRoutingModule,
    MetaModule.forRoot({
      provide: MetaLoader,
      useFactory: metaFactory
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
