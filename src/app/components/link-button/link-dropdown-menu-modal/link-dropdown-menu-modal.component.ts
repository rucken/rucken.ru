import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { LinkModel } from 'src/app/models/link.model';
import { ModuleModel } from 'src/app/models/module.model';
import { PageModulesModel } from 'src/app/models/page-modules.model';

@Component({
  selector: 'app-link-dropdown-menu-modal',
  templateUrl: './link-dropdown-menu-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkDropdownMenuModalComponent {
  @Input()
  category: string;
  @Input()
  links: LinkModel[] = [];
  constructor(public modalRef: BsModalRef) {

  }
}
