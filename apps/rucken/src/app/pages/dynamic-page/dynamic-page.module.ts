import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactPreviewModule } from '../../components/contact-preview/contact-preview.module';
import { ModulesPreviewModule } from '../../components/modules-preview/modules-preview.module';
import { DynamicPageComponent } from './dynamic-page.component';
import { DynamicPageRoutes } from './dynamic-page.routing';

@NgModule({
  imports: [
    CommonModule,
    ModulesPreviewModule,
    ContactPreviewModule,
    DynamicPageRoutes,
  ],
  declarations: [DynamicPageComponent],
})
export class DynamicPageModule {}
