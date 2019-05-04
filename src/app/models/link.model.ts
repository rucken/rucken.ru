import { plainToClassFromExist } from 'class-transformer';

export class LinkModel {
    title?: string = undefined;

    url?: string = undefined;

    alt?: string = undefined;

    iconSvg?: string = undefined;

    iconClass?: string = undefined;

    buttonClass?: string = undefined;

    constructor(data?: Partial<LinkModel>) {
        plainToClassFromExist(this, data);
    }
}
