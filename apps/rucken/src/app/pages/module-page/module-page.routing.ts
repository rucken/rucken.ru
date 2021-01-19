import { Routes, RouterModule } from '@angular/router';
import { ModulePageComponent } from './module-page.component';

const routes: Routes = [
  {
    path: '',
    component: ModulePageComponent,
  },
];

export const ModulePageRoutes = RouterModule.forChild(routes);
