import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-module-page',
    templateUrl: './module-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModulePageComponent {}
