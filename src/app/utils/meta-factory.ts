import { MetaLoader, MetaStaticLoader, PageTitlePositioning } from '@ngx-meta/core';
import { RUCKEN_SITE } from '../data/rucken-site';

export function metaFactory(): MetaLoader {
    return new MetaStaticLoader({
        pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
        pageTitleSeparator: ' - ',
        applicationName: RUCKEN_SITE.brand.title,
        defaults: {
            title: RUCKEN_SITE.brand.title,
            description: RUCKEN_SITE.brand.description,
            'og:site_name': RUCKEN_SITE.brand.title,
            'og:type': 'website',
            'og:locale': 'en_US',
            'og:locale:alternate': 'en_US,ru_RU',
            'og:image': RUCKEN_SITE.brand.bigImage,
            'twitter:card': 'summary',
            'og:image:width': '1240',
            'og:image:heigh': '600'
        }
    });
}
