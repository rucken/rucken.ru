import { ModuleModel } from '../../models/module.model';

export const RUCKEN_NESTJS_APPLICATION = new ModuleModel({
    title: 'Rucken: NestJS',
    name: 'rucken-core-nestjs',
    tags: ['angular', 'nx', 'nestjs'],
    versionBadge: 'https://badge.fury.io/js/%40rucken%2Fcore-nestjs.svg',
    buildBadge: 'https://travis-ci.org/rucken/core-nestjs.svg?branch=master',
    description: `Base entities, DTOs, services and controllers for backend application on NestJS with TypeORM`,
    images: [
        {
            description: 'Home page with README.md',
            src: 'assets/rucken-core/nestjs/rucken-nestjs-home.png',
        },
        {
            description: 'Swagger page',
            src: 'assets/rucken-core/nestjs/rucken-nestjs-swagger.png',
        },
        {
            description: 'Typedoc page',
            src: 'assets/rucken-core/nestjs/rucken-nestjs-typedoc.png',
        },
    ],
    features: [
        {
            description: 'Basic entities, services and controllers for create applications',
            links: [
                {
                    title: 'TypeORM',
                    url: 'http://typeorm.io',
                },
            ],
        },
        {
            description: 'Sign-in with social networks and local over JWT',
            links: [
                {
                    title: 'Passport',
                    url: 'https://github.com/jaredhanson/passport',
                },
            ],
        },
        {
            description: 'Class based validation and transformation',
            links: [
                {
                    title: 'class-transformer',
                    url: 'https://github.com/typestack/class-transformer',
                },
                {
                    title: 'class-validator',
                    url: 'https://github.com/typestack/class-validator',
                },
            ],
        },
    ],
    demos: [
        {
            url: 'https://core-nestjs.rucken.ru/',
        },
    ],
    sources: [
        {
            url: 'https://github.com/rucken/core-nestjs',
        },
    ],
    packages: [
        {
            title: '@rucken/core-nestjs',
            url: 'https://npmjs.org/package/@rucken/core-nestjs',
        },
        {
            title: '@rucken/auth-nestjs',
            url: 'https://npmjs.org/package/@rucken/auth-nestjs',
        },
    ],
});
