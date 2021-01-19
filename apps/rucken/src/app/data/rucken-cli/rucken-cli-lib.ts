import { ModuleModel } from '../../models/module.model';

export const RUCKEN_CLI_LIBRARY = new ModuleModel({
  title: 'Rucken Cli: Library',
  name: 'rucken-generator-library',
  tags: ['angular', 'nx', 'nestjs', 'ionic', 'bootstrap', 'generator'],
  description: `Library generator, based on the Rucken template`,
  samples: [
    {
      title: 'Run example',
      code: `npx @rucken/cli lib custom-lib --org=custom-org --type=all
npx @rucken/cli lib custom-lib-web --org=custom-org --type=frontend
npx @rucken/cli lib custom-lib-ionic --org=custom-org --type=frontend`,
    },
    {
      title: 'Build libraries example',
      code: `npm run ng build custom-lib
npm run ng build custom-lib-web
npm run ng build custom-lib-ionic
npm run ng build custom-lib-nestjs`,
    },
  ],
  images: [
    {
      description: 'Create libraries',
      src: 'assets/rucken-cli/generators/rucken-cli-library-create.png',
    },
    {
      description: 'Create Web library',
      src: 'assets/rucken-cli/generators/rucken-cli-library-web-create.png',
    },
    {
      description: 'Create Ionic library',
      src: 'assets/rucken-cli/generators/rucken-cli-library-ionic-create.png',
    },
    {
      description: 'Build Core library',
      src: 'assets/rucken-cli/generators/rucken-cli-library-core-build.png',
    },
    {
      description: 'Build Web library',
      src: 'assets/rucken-cli/generators/rucken-cli-library-web-build.png',
    },
    {
      description: 'Build Ionic library',
      src: 'assets/rucken-cli/generators/rucken-cli-library-ionic-build.png',
    },
    {
      description: 'Build NestJS library',
      src: 'assets/rucken-cli/generators/rucken-cli-library-nestjs-build.png',
    },
  ],
  outputs: [
    {
      title: 'NestJS library files',
      buttonClass: 'btn-nestjs',
      url:
        'https://github.com/rucken/cli/tree/generators-outputs/generators/libs/custom-org/custom-lib-nestjs',
    },
    {
      title: 'Web library files',
      buttonClass: 'btn-bootstrap',
      url:
        'https://github.com/rucken/cli/tree/generators-outputs/generators/libs/custom-org/custom-lib-web',
    },
    {
      title: 'Ionic library files',
      buttonClass: 'btn-ionic',
      url:
        'https://github.com/rucken/cli/tree/generators-outputs/generators/libs/custom-org/custom-lib-ionic',
    },
  ],
  sources: [
    {
      url:
        'https://github.com/rucken/cli/blob/develop/src/commands/generator-library.ts',
    },
  ],
  packages: [
    {
      url:
        'https://www.npmjs.com/package/@rucken/cli#rucken-generator-library-name',
    },
  ],
});
