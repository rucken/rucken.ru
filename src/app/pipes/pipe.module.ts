import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EncodeURIComponentPipe } from './encodeURIComponent.pipe';
import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EncodeURIComponentPipe,
    SafeHtmlPipe,
    SafeHtmlPipe
  ],
  exports: [
    EncodeURIComponentPipe,
    SafeHtmlPipe
  ]
})
export class PipeModule { }
