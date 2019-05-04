import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactPreviewComponent } from './contact-preview.component';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot()
  ],
  declarations: [ContactPreviewComponent],
  exports: [ContactPreviewComponent]
})
export class ContactPreviewModule { }
