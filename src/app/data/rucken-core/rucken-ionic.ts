import { ModuleModel } from '../../models/module.model';

export const RUCKEN_IONIC_APPLICATION = new ModuleModel({
    title: 'Rucken: Ionic',
    name: 'rucken-ionic',
    tags: ['angular', 'nx', 'ionic'],
    versionBadge: 'https://badge.fury.io/js/%40rucken%2Fionic.svg',
    buildBadge: 'https://travis-ci.org/rucken/ionic.svg?branch=master',
    description: `Admin UI on Ionicframework for Angular7+ mobile applications`,
    images: [
        {
            description: 'Home page',
            src: 'assets/rucken-core/ionic/rucken-ionic-home-page.png'
        },
        {
            description: 'Profile page',
            src: 'assets/rucken-core/ionic/rucken-ionic-profile-page.png'
        },
        {
            description: 'Sign-in page',
            src: 'assets/rucken-core/ionic/rucken-ionic-sign-in.png'
        },
        {
            description: 'Users page',
            src: 'assets/rucken-core/ionic/rucken-ionic-users-page.png'
        },
        {
            description: 'User add page',
            src: 'assets/rucken-core/ionic/rucken-ionic-users-add.png'
        },
        {
            description: 'Users filter modal',
            src: 'assets/rucken-core/ionic/rucken-ionic-users-filter.png'
        },
    ],
    features: [
        {
            description: 'Basic components and pipes for create applications',
            links: [
                {
                    title: 'ionicframework',
                    url: 'https://ionicframework.com/docs/components/'
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
        title: 'Online',
        url: 'https://rucken.github.io/ionic'
    }, {
        title: 'Application for Android',
        url: 'https://rucken.github.io/ionic/rucken-ionic.apk'
    }],
    sources: [{
        url: 'https://github.com/rucken/ionic'
    }],
    packages: [
        {
            url: 'https://npmjs.org/package/@rucken/ionic'
        }
    ]
});
