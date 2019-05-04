import { ChangeDetectionStrategy, Component, OnDestroy, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BindObservable } from 'bind-observable';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Observable } from 'rxjs';
import { PageModel } from 'src/app/models/page.model';
import { SiteModel } from 'src/app/models/site.model';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnDestroy {
  @Input()
  site: SiteModel;

  @BindObservable()
  isCollapsed = true;
  isCollapsed$: Observable<boolean>;

  constructor(private router: Router) {
    this.router.events.pipe(untilDestroyed(this)).subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isCollapsed = true;
      }
    });
  }
  ngOnDestroy(): void { }
}
