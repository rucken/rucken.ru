import { SiteModel } from '../models/site.model';
import { RUCKEN_CLI_APP } from './rucken-cli/rucken-cli-app';
import { RUCKEN_CLI_ENTITY } from './rucken-cli/rucken-cli-entity';
import { RUCKEN_CLI_ENTITY_TO_APPLICATION } from './rucken-cli/rucken-cli-entity2app';
import { RUCKEN_CLI_LIBRARY } from './rucken-cli/rucken-cli-lib';
import { RUCKEN_CLI_LIBRARY_TO_APPLICATION } from './rucken-cli/rucken-cli-lib2app';
import { RUCKEN_CLI_TOOLS } from './rucken-cli/rucken-cli-tools';
import { RUCKEN_CLI_WORKSPACE } from './rucken-cli/rucken-cli-workspace';
import { RUCKEN_IONIC_APPLICATION } from './rucken-core/rucken-ionic';
import { RUCKEN_NESTJS_APPLICATION } from './rucken-core/rucken-nestjs';
import { RUCKEN_WEB_APPLICATION } from './rucken-core/rucken-web';
import { RUCKEN_TODO_MODULE } from './rucken-todo/rucken-todo';

export const RUCKEN_SITE = new SiteModel({
    brand: {
        title: 'Rucken',
        domain: 'https://rucken.io',
        routerLink: ['home'],
        image: 'assets/svg/rucken-icon-blue.svg',
        bigImage: 'https://rucken.io/img/rucken-og.png',
        description: 'Rucken is a cross-platform fullstack core libraries for create Angular, NestJS and Ionic applications with samples working on NX workspace',
        shortDescription: 'Rucken - A cross-platform fullstack core libraries for create applications'
    },
    twitter: {
        username: 'rucken_io'
    },
    pages: [
        {
            type: 'modules',
            name: 'home',
            iconClass: 'fas fa-home',
            title: 'Home',
            description: `Cross-platform fullstack core libraries for create Angular,
NestJS and Ionic applications with samples working on NX workspace`,
            modules: [
                RUCKEN_WEB_APPLICATION,
                RUCKEN_NESTJS_APPLICATION,
                RUCKEN_IONIC_APPLICATION
            ]
        },
        {
            type: 'modules',
            name: 'modules',
            iconClass: 'fas fa-cubes',
            title: 'Modules',
            description: `Modules with custom logics based rucken core classes`,
            modules: [
                RUCKEN_TODO_MODULE
            ]
        },
        {
            type: 'modules',
            name: 'cli',
            iconClass: 'fas fa-terminal',
            title: 'Cli',
            description: `Console tools for create and build Angular7+, Bootstrap, Ionic and NestJS application`,
            modules: [
                RUCKEN_CLI_WORKSPACE,
                RUCKEN_CLI_APP,
                RUCKEN_CLI_LIBRARY,
                RUCKEN_CLI_LIBRARY_TO_APPLICATION,
                RUCKEN_CLI_ENTITY,
                RUCKEN_CLI_ENTITY_TO_APPLICATION,
                ...RUCKEN_CLI_TOOLS
            ]
        },
        {
            type: 'contact',
            name: 'contact',
            iconClass: 'fas fa-envelope',
            title: 'Contact',
            description: `Contact form`,
            handlerUrl: '/api/contact'
        },
        {
            type: 'external-link',
            name: 'github',
            iconClass: 'fab fa-github-alt',
            title: 'Github',
            description: `Github organization with all sources files`,
            externalUrl: 'https://github.com/rucken'
        }
    ]
});
