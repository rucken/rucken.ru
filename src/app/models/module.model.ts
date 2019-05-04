import { plainToClassFromExist, Type } from 'class-transformer';
import { LinkModel } from './link.model';

export class ModuleImageModel {
    src: string = undefined;

    description?: string = undefined;

    constructor(data?: Partial<ModuleImageModel>) {
        plainToClassFromExist(this, data);
    }
}
export class ModuleFeatureModel {
    description: string;

    @Type(() => LinkModel)
    links?: LinkModel[] = undefined;

    constructor(data?: Partial<ModuleFeatureModel>) {
        plainToClassFromExist(this, data);
    }
}
export class ModuleSampleModel {
    code: string = undefined;

    title?: string = undefined;

    constructor(data?: Partial<ModuleSampleModel>) {
        plainToClassFromExist(this, data);
    }
}

export class ModuleModel {
    name?: string = undefined;

    title: string = undefined;

    tags: ('angular' | 'nestjs' | 'ionic' | 'bootstrap' | 'nx' | 'generator' | 'tools')[];

    description: string = undefined;

    versionBadge?: string = undefined;

    buildBadge?: string = undefined;

    @Type(() => ModuleImageModel)
    images: ModuleImageModel[] = undefined;

    @Type(() => ModuleFeatureModel)
    features?: ModuleFeatureModel[] = undefined;

    @Type(() => LinkModel)
    outputs?: LinkModel[] = undefined;

    @Type(() => LinkModel)
    demos?: LinkModel[] = undefined;

    @Type(() => LinkModel)
    sources?: LinkModel[] = undefined;

    @Type(() => LinkModel)
    packages?: LinkModel[] = undefined;

    @Type(() => ModuleSampleModel)
    samples?: ModuleSampleModel[] = undefined;

    constructor(data?: Partial<ModuleModel>) {
        plainToClassFromExist(this, data);
    }
}
