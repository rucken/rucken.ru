import { ModuleModel } from '../../models/module.model';

export const RUCKEN_CLI_ENTITY = new ModuleModel({
  title: 'Rucken Cli: Entity',
  name: 'rucken-generator-entity',
  tags: ['angular', 'nx', 'nestjs', 'ionic', 'bootstrap', 'generator'],
  description: `The generator of the entity, based on the Rucken template`,
  samples: [
    {
      title: 'Run example',
      code: `npx @rucken/cli entity custom-entity --lib=custom-lib --timestamp=1553957529598 --type=all`,
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
      description: 'Create entities',
      src: 'assets/rucken-cli/generators/rucken-cli-entity-create.png',
    },
    {
      description: 'Build libraries with Web and Ionic entities',
      src: 'assets/rucken-cli/generators/rucken-cli-entity-frontend-build.png',
    },
    {
      description: 'Build libraries with NestJS entities',
      src: 'assets/rucken-cli/generators/rucken-cli-entity-nestjs-build.png',
    },
  ],
  outputs: [
    {
      title: 'NestJS entity files',
      buttonClass: 'btn-nestjs',
      url:
        'https://github.com/rucken/cli/blob/generators-outputs/generators/libs/custom-org/custom-lib-nestjs/src/entities/custom-entity.entity.ts',
    },
    {
      title: 'Web entity files',
      buttonClass: 'btn-bootstrap',
      url:
        'https://github.com/rucken/cli/tree/generators-outputs/generators/libs/custom-org/custom-lib-web/src/lib/entities/custom-entities',
    },
    {
      title: 'Ionic entity files',
      buttonClass: 'btn-ionic',
      url:
        'https://github.com/rucken/cli/tree/generators-outputs/generators/libs/custom-org/custom-lib-ionic/src/lib/entities/custom-entities',
    },
  ],
  sources: [
    {
      url:
        'https://github.com/rucken/cli/blob/develop/src/commands/generator-entity.ts',
    },
  ],
  packages: [
    {
      url:
        'https://www.npmjs.com/package/@rucken/cli#rucken-generator-entity-name',
    },
  ],
});
