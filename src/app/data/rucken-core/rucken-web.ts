import { ModuleModel } from '../../models/module.model';

export const RUCKEN_WEB_APPLICATION = new ModuleModel({
    title: 'Rucken: Web',
    name: 'rucken-core',
    tags: ['angular', 'bootstrap'],
    versionBadge: 'https://badge.fury.io/js/%40rucken%2Fcore.svg',
    buildBadge: 'https://travis-ci.org/rucken/core.svg?branch=master',
    description: `Admin UI on Bootstrap3 for Angular7+ web applications`,
    images: [
        {
            description: 'Profile page',
            src: 'assets/rucken-core/web/rucken-web-account-profile.png'
        },
        {
            description: 'Users page',
            src: 'assets/rucken-core/web/rucken-web-entities-users.png'
        },
        {
            description: 'User create modal',
            src: 'assets/rucken-core/web/rucken-web-entities-users-create.png'
        },
        {
            description: 'Select group for add to user',
            src: 'assets/rucken-core/web/rucken-web-entities-users-create-select-group.png'
        },
        {
            description: 'Group create modal',
            src: 'assets/rucken-core/web/rucken-web-entities-groups-create-lang.png'
        },
        {
            description: 'Sign-in modal',
            src: 'assets/rucken-core/web/rucken-web-sign-in.png'
        },
        {
            description: 'Themes page',
            src: 'assets/rucken-core/web/rucken-web-themes.png'
        }
    ],
    features: [
        {
            description: 'Basic components and pipes for create applications',
            links: [
                {
                    title: 'ngx-bootstrap',
                    url: 'https://valor-software.com/ngx-bootstrap'
                },
            ]
        },
        {
            description: 'Sign-in with social networks and local over JWT',
            links: [
                {
                    title: 'jsonwebtoken',
                    url: 'https://github.com/auth0/node-jsonwebtoken'
                },
            ]
        },
        {
            description: 'Class based form and in service validation with transformation for work with backend',
            links: [
                {
                    title: 'class-transformer',
                    url: 'https://github.com/typestack/class-transformer'
                },
                {
                    title: 'class-validator',
                    url: 'https://github.com/typestack/class-validator'
                },
                {
                    title: 'ngx-dynamic-form-builder',
                    url: 'https://www.npmjs.com/package/ngx-dynamic-form-builder'
                },
                {
                    title: 'ngx-repository',
                    url: 'https://www.npmjs.com/package/ngx-repository'
                },
            ]
        },
        {
            description: 'Base components with logic for manage entities list or grids and modal or route for edit one entity',
            links: [
                {
                    title: 'ngx-bind-io',
                    url: 'https://www.npmjs.com/package/ngx-bind-io'
                },
            ]
        },
        {
            description: 'Support in server-side rendering',
            links: [
                {
                    title: '@nguniversal/express-engine',
                    url: 'https://github.com/angular/universal'
                },
                {
                    title: 'ngx-cookie-service',
                    url: 'https://www.npmjs.com/package/ngx-cookie-service'
                },
            ]
        },
        {
            description: 'UI for manage users, roles, group and permissions',
            links: [
                {
                    title: 'ngx-permissions',
                    url: 'https://www.npmjs.com/package/ngx-permissions'
                },
            ]
        },
        {
            description: 'All used strings translated, in the box: en, ru',
            links: [
                {
                    title: 'ngx-translate',
                    url: 'https://github.com/ngx-translate/core'
                },
                {
                    title: 'ngx-translate-extract',
                    url: 'https://github.com/biesbjerg/ngx-translate-extract'
                },
            ]
        },
    ],
    demos: [{
        url: 'https://web.rucken.io'
    }],
    sources: [{
        url: 'https://github.com/rucken/core'
    }],
    packages: [
        {
            title: '@rucken/core',
            url: 'https://npmjs.org/package/@rucken/core'
        },
        {
            title: '@rucken/web',
            url: 'https://npmjs.org/package/@rucken/web'
        }
    ]
});
