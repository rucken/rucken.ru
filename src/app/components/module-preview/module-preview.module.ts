import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxGalleryModule } from 'ngx-gallery';
import { PipeModule } from 'src/app/pipes/pipe.module';
import { LinkButtonModule } from '../link-button/link-button.module';
import { ModulePreviewComponent } from './module-preview.component';
@NgModule({
  imports: [
    CommonModule,
    LinkButtonModule,
    PipeModule,
    NgxGalleryModule
  ],
  declarations: [ModulePreviewComponent],
  exports: [ModulePreviewComponent]
})
export class ModulePreviewModule { }
