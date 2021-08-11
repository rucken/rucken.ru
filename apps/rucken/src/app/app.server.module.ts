import { NgModule } from '@angular/core';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from './app.component';
import { ApplicationModule } from './app.module';
@NgModule({
    imports: [ApplicationModule, ServerModule, FlexLayoutServerModule, NoopAnimationsModule],
    bootstrap: [AppComponent],
})
export class AppServerModule {}
