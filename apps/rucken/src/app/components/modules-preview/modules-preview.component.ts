import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PageModulesModel } from '../../models/page-modules.model';

@Component({
  selector: 'app-modules-preview',
  templateUrl: './modules-preview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModulesPreviewComponent {
  @Input()
  page: PageModulesModel<any>;
}
