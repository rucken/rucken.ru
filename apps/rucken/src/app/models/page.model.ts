import { PageContactModel } from './page-contact.model';
import { PageExternalLinkModel } from './page-external-link.model';
import { PageModulesModel } from './page-modules.model';

export type PageModel<T = any> =
  | PageModulesModel<T>
  | PageContactModel<T>
  | PageExternalLinkModel<T>;
