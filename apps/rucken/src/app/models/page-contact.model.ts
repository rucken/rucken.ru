import { plainToClassFromExist } from 'class-transformer';

export class PageContactModel<T> {
    type: 'contact';

    name?: T = undefined;

    title?: string = undefined;

    description?: string = undefined;

    handlerUrl: string = undefined;

    alt?: string = undefined;

    iconSvg?: string = undefined;

    iconClass?: string = undefined;

    constructor(data?: Partial<PageContactModel<T>>) {
        plainToClassFromExist(this, data);
    }
}
