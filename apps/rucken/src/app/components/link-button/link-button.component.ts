import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LinkModel } from '../../models/link.model';
import { LinkDropdownMenuModalComponent } from './link-dropdown-menu-modal/link-dropdown-menu-modal.component';

@Component({
    selector: 'app-link-button',
    templateUrl: './link-button.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkButtonComponent {
    @Input()
    category: string;
    @Input()
    module: string;
    @Input()
    buttonDefaultClass = 'btn-primary';
    @Input()
    mainLink: LinkModel = new LinkModel();
    @Input()
    links: LinkModel[];

    isXS$: Observable<boolean>;

    constructor(private mediaObserver: MediaObserver, private modalService: BsModalService) {
        this.isXS$ = this.mediaObserver.asObservable().pipe(map((changes) => !!changes.find((change) => change.mqAlias === 'xs' || change.mqAlias === 'sm')));
    }
    openLinkDropdownMenuModal() {
        const initialState: Partial<LinkDropdownMenuModalComponent> = {
            category: this.category,
            links: this.links,
        };
        this.modalService.show(LinkDropdownMenuModalComponent, {
            initialState,
            keyboard: true,
        });
    }
}
