import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidenavModule } from '../../components/sidenav/sidenav.module';
import { ModulePageComponent } from './module-page.component';
import { ModulePageRoutes } from './module-page.routing';

@NgModule({
    imports: [CommonModule, SidenavModule, ModulePageRoutes],
    declarations: [ModulePageComponent],
})
export class ModulePageModule {}
