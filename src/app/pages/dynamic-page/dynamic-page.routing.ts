import { RouterModule, Routes } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';
import { DynamicPageComponent } from './dynamic-page.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicPageComponent,
    canActivate: [MetaGuard]
  },
];

export const DynamicPageRoutes = RouterModule.forChild(routes);
