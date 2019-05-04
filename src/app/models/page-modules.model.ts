import { plainToClassFromExist, Type } from 'class-transformer';
import { LinkModel } from './link.model';
import { ModuleModel } from './module.model';

export class PageModulesModel<T> {
    type: 'modules';

    name?: T = undefined;

    title?: string = undefined;

    description?: string = undefined;

    @Type(() => LinkModel)
    modules: ModuleModel[] = undefined;

    alt?: string = undefined;

    iconSvg?: string = undefined;

    iconClass?: string = undefined;

    constructor(data?: Partial<PageModulesModel<T>>) {
        plainToClassFromExist(this, data);
    }
}
