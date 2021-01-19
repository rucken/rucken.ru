import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BindObservable } from 'bind-observable';
import { Observable } from 'rxjs';
import { SiteModel } from '../../models/site.model';

@UntilDestroy()
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @Input()
  site: SiteModel;

  @BindObservable()
  isCollapsed = true;
  isCollapsed$: Observable<boolean>;

  constructor(private router: Router) {
    this.router.events.pipe(untilDestroyed(this)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isCollapsed = true;
      }
    });
  }
}
