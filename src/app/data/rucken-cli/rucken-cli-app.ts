import { ModuleModel } from '../../models/module.model';

export const RUCKEN_CLI_APP = new ModuleModel({
    title: 'Rucken Cli: Application',
    name: 'rucken-generator-application',
    tags: ['angular', 'nx', 'nestjs', 'ionic', 'bootstrap', 'generator'],
    description: `Application generator, based on the Rucken template`,
    samples: [
        {
            title: 'Run example',
            code: `npx @rucken/cli app custom-app --api=/api --type=all`
        },
        {
            title: 'Install dependencies',
            code: `npm i`
        },
        {
            title: 'Build example',
            code: `npm run ng build custom-app
npm run ng build custom-app-ionic
npm run ng build custom-app-nestjs
# apply migrations for nestjs backend
npm run migrate:prod`
        },
        {
            title: 'Build Android example',
            code: `npm run ng run custom-app-ionic:android-prepare
# twice run as workaround for long operations
npm run ng run custom-app-ionic:android-prepare
npm run ng run custom-app-ionic:android-build`
        },
        {
            title: 'Serve example',
            code: `npm run ng serve custom-app
npm run ng serve custom-app-ionic
npm run ng serve custom-app-nestjs`
        }
    ],
    images: [
        {
            description: 'Create applications',
            src: 'assets/rucken-cli/generators/rucken-cli-applications-create.png'
        },
        {
            description: 'Install dependencies',
            src: 'assets/rucken-cli/generators/rucken-cli-applications-install-dependencies.png'
        },
        {
            description: 'Build NestJS applications',
            src: 'assets/rucken-cli/generators/rucken-cli-applications-build-nestjs.png'
        },
        {
            description: 'Run migrations for NestJS applications',
            src: 'assets/rucken-cli/generators/rucken-cli-applications-db-migrate-nestjs.png'
        },
        {
            description: 'Build Web applications',
            src: 'assets/rucken-cli/generators/rucken-cli-applications-build-web.png'
        },
        {
            description: 'Build Ionic applications',
            src: 'assets/rucken-cli/generators/rucken-cli-applications-build-ionic.png'
        },
        {
            description: 'Build Android Ionic applications',
            src: 'assets/rucken-cli/generators/rucken-cli-applications-build-android-ionic.png'
        },
        {
            description: 'Serve NestJS application',
            src: 'assets/rucken-cli/generators/rucken-cli-applications-serve-nestjs.png'
        },
        {
            description: 'Serve Web application',
            src: 'assets/rucken-cli/generators/rucken-cli-applications-serve-web.png'
        },
        {
            description: 'Serve Ionic application',
            src: 'assets/rucken-cli/generators/rucken-cli-applications-serve-ionic.png'
        },
        {
            description: 'View Web application',
            src: 'assets/rucken-cli/generators/rucken-cli-applications-view-web.png'
        },
        {
            description: 'View Ionic application',
            src: 'assets/rucken-cli/generators/rucken-cli-applications-view-ionic.png'
        }
    ],
    outputs: [{
        title: 'NestJS application',
        buttonClass: 'btn-nestjs',
        url: 'https://github.com/rucken/cli/tree/generators-outputs/generators/apps/custom-app-nestjs'
    }, {
        title: 'Web application',
        buttonClass: 'btn-bootstrap',
        url: 'https://github.com/rucken/cli/tree/generators-outputs/generators/apps/custom-app'
    }, {
        title: 'Ionic application',
        buttonClass: 'btn-ionic',
        url: 'https://github.com/rucken/cli/tree/generators-outputs/generators/apps/custom-app-ionic'
    }],
    sources: [{
        url: 'https://github.com/rucken/cli/blob/develop/src/commands/generator-application.ts'
    }],
    packages: [{
        url: 'https://www.npmjs.com/package/@rucken/cli#rucken-generator-application-name'
    }]
});
