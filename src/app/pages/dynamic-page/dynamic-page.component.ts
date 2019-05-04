import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from '@ngx-meta/core';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RUCKEN_SITE } from 'src/app/data/rucken-site';
import { PageModel } from 'src/app/models/page.model';

@Component({
  selector: 'dynamic-page',
  templateUrl: './dynamic-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicPageComponent implements OnInit, OnDestroy {

  page$: Observable<PageModel<any>>;
  pageName$: Observable<string>;

  constructor(
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
    this.page$.pipe(untilDestroyed(this)).subscribe(page => {
      this.meta.setTitle(page.title, true);
      this.meta.setTag('twitter:title', page.title);
      this.meta.setTag('twitter:description', page.description);
      this.meta.setTag('og:title', page.title);
      this.meta.setTag('og:description', page.description);
    });
  }
  ngOnDestroy(): void {
  }
}
