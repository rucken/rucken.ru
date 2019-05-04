import { ModuleModel } from '../../models/module.model';

export const RUCKEN_CLI_LIBRARY_TO_APPLICATION = new ModuleModel({
    title: 'Rucken Cli: Library to application',
    name: 'rucken-generator-library-to-application',
    tags: ['angular', 'nx', 'nestjs', 'ionic', 'bootstrap', 'generator'],
    description: `Linking the library to the application, based on the Rucken template`,
    samples: [
        {
            title: 'Run example',
            code: `npx @rucken/cli lib2app --frontendLib=custom-lib --frontendApp=custom-app --type=frontend
npx @rucken/cli lib2app --frontendLib=custom-lib-web --frontendApp=custom-app --type=frontend
npx @rucken/cli lib2app --frontendLib=custom-lib --frontendApp=custom-app-ionic --type=frontend
npx @rucken/cli lib2app --frontendLib=custom-lib-ionic --frontendApp=custom-app-ionic --type=frontend
npx @rucken/cli lib2app --nestjsLib=custom-lib-nestjs --nestjsApp=custom-app-nestjs --type=nestjs`
        }
    ],
    images: [
        {
            description: 'Linking the frontend library to the application',
            src: 'assets/rucken-cli/generators/rucken-cli-lib2app-frontend.png'
        },
        {
            description: 'Linking the NestJS library to the application',
            src: 'assets/rucken-cli/generators/rucken-cli-lib2app-nestjs.png'
        }
    ],
    outputs: [{
        title: 'Link of NestJS library',
        buttonClass: 'btn-nestjs',
        url: 'https://github.com/rucken/cli/blob/generators-outputs/generators/apps/custom-app-nestjs/src/app/app.module.ts#L19'
    }, {
        title: 'Link of Web library',
        buttonClass: 'btn-bootstrap',
        url: 'https://github.com/rucken/cli/blob/generators-outputs/generators/apps/custom-app/src/app/app.module.ts#L70'
    }, {
        title: 'Link of Ionic library',
        buttonClass: 'btn-ionic',
        url: 'https://github.com/rucken/cli/blob/generators-outputs/generators/apps/custom-app-ionic/src/app/app.module.ts#L104'
    }],
    sources: [{
        url: 'https://github.com/rucken/cli/blob/develop/src/commands/generator-library-to-application.ts'
    }],
    packages: [{
        url: 'https://www.npmjs.com/package/@rucken/cli#rucken-generator-library-to-application-name'
    }]
});
