import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PipeModule } from 'src/app/pipes/pipe.module';
import { LinkButtonComponent } from './link-button.component';
import { LinkDropdownMenuModalComponent } from './link-dropdown-menu-modal/link-dropdown-menu-modal.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    PipeModule,
    FlexLayoutModule
  ],
  entryComponents: [LinkDropdownMenuModalComponent],
  declarations: [LinkButtonComponent, LinkDropdownMenuModalComponent],
  exports: [LinkButtonComponent, LinkDropdownMenuModalComponent]
})
export class LinkButtonModule { }
