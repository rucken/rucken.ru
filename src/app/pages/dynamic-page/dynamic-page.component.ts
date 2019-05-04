import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inject } from '@nestjs/common';
import { MetaService } from '@ngx-meta/core';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RUCKEN_SITE } from 'src/app/data/rucken-site';
import { PageModel } from 'src/app/models/page.model';
import { CUSTOM_WINDOW, CustomWindow } from 'src/app/utils/custom-window';

@Component({
  selector: 'dynamic-page',
  templateUrl: './dynamic-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicPageComponent implements OnInit, OnDestroy {

  page$: Observable<PageModel<any>>;
  pageName$: Observable<string>;

  constructor(
    @Inject(CUSTOM_WINDOW) private window: CustomWindow,
    private activatedRoute: ActivatedRoute,
    private readonly meta: MetaService
  ) {
    this.page$ = this.activatedRoute.parent.params.pipe(
      map(params =>
        RUCKEN_SITE.getPageByName(params.pageName)
      ));
    this.pageName$ = this.activatedRoute.parent.params.pipe(map(params =>
      params.pageName
    ));
  }
  ngOnInit(): void {
    console.log(this.window.location.hostname);
    const host = this.window.location.hostname;
    this.page$.pipe(untilDestroyed(this)).subscribe(page => {
      this.meta.setTitle(page.title, true);
      this.meta.setTag('twitter:title', page.title);
      this.meta.setTag('twitter:description', page.description);
      this.meta.setTag('twitter:site', `${host}/${page.name}`);
      this.meta.setTag('og:title', page.title);
      this.meta.setTag('og:description', page.description);
      this.meta.setTag('og:url', `${host}/${page.name}`);
      if (page.type === 'modules') {
        const firstImage = page.modules.map(module => module.images[0]).filter(image => image)[0];
        if (firstImage) {
          this.meta.setTag('twitter:image', `${host}/${firstImage.src}`);
          this.meta.setTag('og:image', `${host}/${firstImage.src}`);
        }
      }
    });
  }
  ngOnDestroy(): void {
  }
}
