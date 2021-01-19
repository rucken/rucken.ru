import { plainToClassFromExist } from 'class-transformer';

export class PageExternalLinkModel<T> {
  type: 'external-link';

  name?: T = undefined;

  title?: string = undefined;

  description?: string = undefined;

  externalUrl: string = undefined;

  alt?: string = undefined;

  iconSvg?: string = undefined;

  iconClass?: string = undefined;

  constructor(data?: Partial<PageExternalLinkModel<T>>) {
    plainToClassFromExist(this, data);
  }
}
