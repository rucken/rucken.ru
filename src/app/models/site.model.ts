import { plainToClassFromExist, Type } from 'class-transformer';
import { PageContactModel } from './page-contact.model';
import { PageExternalLinkModel } from './page-external-link.model';
import { PageModulesModel } from './page-modules.model';
import { PageModel } from './page.model';

export class SiteBrandModel {
    title: string;
    routerLink: string[];
    image: string;
    bigImage: string;
    description: string;
    shortDescription: string;
    constructor(data?: Partial<SiteBrandModel>) {
        plainToClassFromExist(this, data);
    }
}

export class SiteModel<T = 'home' | 'modules' | 'cli'> {
    @Type(() => SiteBrandModel)
    brand: SiteBrandModel = undefined;

    pages: PageModel<T>[] = undefined;
    constructor(data?: Partial<SiteModel<T>>) {
        plainToClassFromExist(this, data);
        this.pages = data.pages ? data.pages.map(page => {
            if (page.type === 'modules') {
                return new PageModulesModel<T>(page);
            }
            if (page.type === 'contact') {
                return new PageContactModel<T>(page);
            }
            if (page.type === 'external-link') {
                return new PageExternalLinkModel<T>(page);
            }
        }) : [];
    }
    getPageByName(name: T) {
        const pages = this.pages.filter(page => page.name === name);
        return pages[0];
    }
}
