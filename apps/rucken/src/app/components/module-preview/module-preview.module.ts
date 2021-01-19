import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Angulartics2Module } from 'angulartics2';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { PipeModule } from '../../pipes/pipe.module';
import { LinkButtonModule } from '../link-button/link-button.module';
import { ModulePreviewComponent } from './module-preview.component';
@NgModule({
  imports: [
    CommonModule,
    LinkButtonModule,
    PipeModule,
    NgxGalleryModule,
    Angulartics2Module,
  ],
  declarations: [ModulePreviewComponent],
  exports: [ModulePreviewComponent],
})
export class ModulePreviewModule {}
