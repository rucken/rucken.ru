import { ModuleModel } from '../../models/module.model';

export const RUCKEN_CLI_ENTITY_TO_APPLICATION = new ModuleModel({
    title: 'Rucken Cli: Entity to application',
    name: 'rucken-generator-entity-to-application ',
    tags: ['angular', 'nx', 'nestjs', 'ionic', 'bootstrap', 'generator'],
    description: `Linking the entity to the application, based on the Rucken template`,
    samples: [
        {
            title: 'Run example',
            code: `npx @rucken/cli entity2app custom-entity --lib=custom-lib --app=custom-app --type=all`,
        },
        {
            title: 'Build example',
            code: `npm run ng build custom-app
npm run ng build custom-app-ionic
npm run ng build custom-app-nestjs
# apply migrations for nestjs backend
npm run migrate:prod`,
        },
        {
            title: 'Serve example',
            code: `npm run ng serve custom-app
npm run ng serve custom-app-ionic
npm run ng serve custom-app-nestjs`,
        },
    ],
    images: [
        {
            description: 'Linking the entities to the application',
            src: 'assets/rucken-cli/generators/rucken-cli-entity2app.png',
        },
        {
            description: 'View Web application with entity',
            src: 'assets/rucken-cli/generators/rucken-cli-entity-run-web.png',
        },
        {
            description: 'View Ionic application with entity',
            src: 'assets/rucken-cli/generators/rucken-cli-entity-run-ionic.png',
        },
        {
            description: 'View NestJS application with entity',
            src: 'assets/rucken-cli/generators/rucken-cli-entity-run-nestjs.png',
        },
    ],
    outputs: [
        {
            title: 'Link of NestJS entity',
            buttonClass: 'btn-nestjs',
            url: 'https://github.com/rucken/cli/blob/generators-outputs/generators/apps/custom-app-nestjs/src/app/app.module.ts#L19',
        },
        {
            title: 'Link of Web entity',
            buttonClass: 'btn-bootstrap',
            url: 'https://github.com/rucken/cli/blob/generators-outputs/generators/apps/custom-app/src/app/app.module.ts#L70',
        },
        {
            title: 'Link of Ionic entity',
            buttonClass: 'btn-ionic',
            url: 'https://github.com/rucken/cli/blob/generators-outputs/generators/apps/custom-app-ionic/src/app/app.module.ts#L104',
        },
    ],
    sources: [
        {
            url: 'https://github.com/rucken/cli/blob/develop/src/commands/generator-entity-to-application.ts',
        },
    ],
    packages: [
        {
            url: 'https://www.npmjs.com/package/@rucken/cli#rucken-generator-entity-to-application-name',
        },
    ],
});
