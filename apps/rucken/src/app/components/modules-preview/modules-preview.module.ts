import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesPreviewComponent } from './modules-preview.component';
import { ModulePreviewModule } from '../module-preview/module-preview.module';

@NgModule({
    imports: [CommonModule, ModulePreviewModule],
    declarations: [ModulesPreviewComponent],
    exports: [ModulesPreviewComponent],
})
export class ModulesPreviewModule {}
