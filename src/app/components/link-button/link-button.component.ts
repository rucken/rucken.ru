import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LinkModel } from 'src/app/models/link.model';
import { BsModalService } from 'ngx-bootstrap/modal';
import { LinkDropdownMenuModalComponent } from './link-dropdown-menu-modal/link-dropdown-menu-modal.component';

@Component({
  selector: 'app-link-button',
  templateUrl: './link-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkButtonComponent {
  @Input()
  buttonDefaultClass = 'btn-primary';
  @Input()
  mainLink: LinkModel = new LinkModel();
  @Input()
  links: LinkModel[];

  isXS$: Observable<boolean>;

  constructor(
    private mediaObserver: MediaObserver,
    private modalService: BsModalService
  ) {
    this.isXS$ = this.mediaObserver.media$.pipe(
      map(change => change.mqAlias === 'xs' || change.mqAlias === 'sm')
    );
  }
  openLinkDropdownMenuModal() {
    const initialState = {
      links: this.links
    };
    this.modalService.show(
      LinkDropdownMenuModalComponent,
      {
        initialState,
        keyboard: true
      }
    );
  }
}
