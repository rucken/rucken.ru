import { RouterModule, Routes } from '@angular/router';
import { DynamicPageComponent } from './dynamic-page.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicPageComponent,
  },
];

export const DynamicPageRoutes = RouterModule.forChild(routes);
