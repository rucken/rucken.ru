import { ChangeDetectionStrategy, Component, Inject, OnInit, Optional } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { MetaService } from '@ngx-meta/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RUCKEN_SITE } from '../../data/rucken-site';
import { PageModel } from '../../models/page.model';
import { CUSTOM_WINDOW } from '../../utils/custom-window';

@UntilDestroy()
@Component({
    selector: 'dynamic-page',
    templateUrl: './dynamic-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicPageComponent implements OnInit {
    page$: Observable<PageModel<any>>;
    pageName$: Observable<string>;

    constructor(
        @Optional() @Inject(REQUEST) private request,
        @Inject(CUSTOM_WINDOW) private customWindow,
        private activatedRoute: ActivatedRoute,
        private meta: MetaService
    ) {
        this.page$ = this.activatedRoute.parent.params.pipe(map((params) => RUCKEN_SITE.getPageByName(params.pageName)));
        this.pageName$ = this.activatedRoute.parent.params.pipe(map((params) => params.pageName));
    }
    ngOnInit(): void {
        const host =
            (this.customWindow && this.customWindow.origin) ||
            (this.request &&
                this.request.headers &&
                (this.request.headers.origin ||
                    (this.request.headers.host
                        ? (this.request.headers.host.indexOf('localhost') === 0 ? 'http://' : 'https://') + this.request.headers.host
                        : undefined))) ||
            RUCKEN_SITE.brand.domain;
        this.page$.pipe(untilDestroyed(this)).subscribe((page) => {
            if (page) {
                this.meta.setTitle([page.description, RUCKEN_SITE.brand.title].join(' - '), true);
                this.meta.setTag('twitter:title', page.title);
                this.meta.setTag('twitter:description', page.description);
                this.meta.setTag('twitter:site', `@${RUCKEN_SITE.twitter.username}`);
                this.meta.setTag('og:title', page.title);
                this.meta.setTag('og:description', page.description);
                this.meta.setTag('og:url', `${host}/${page.name}`);
                if (page.type === 'modules') {
                    const firstImage = page.modules.map((module) => module.images[0]).filter((image) => image)[0];
                    if (firstImage) {
                        this.meta.setTag('twitter:image:alt', firstImage.description);
                        this.meta.setTag('twitter:image', `${host}/${firstImage.thumb}`);
                        this.meta.setTag('og:image:alt', firstImage.description);
                        this.meta.setTag('og:image', `${host}/${firstImage.thumb}`);
                    }
                }
            }
        });
    }
}
