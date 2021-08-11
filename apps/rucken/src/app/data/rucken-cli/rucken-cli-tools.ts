import { ModuleModel } from '../../models/module.model';

export const RUCKEN_CLI_TOOLS = [
    new ModuleModel({
        title: 'Rucken Cli: Config',
        name: 'rucken-config',
        tags: ['angular', 'nx', 'nestjs', 'tools'],
        description: `Change angular.json properties and tsconfig.json properties for switch between dev - for speedup mono serve mode and prod - build optimization and standalone build all lib and application`,
        samples: [
            {
                title: 'Run example',
                code: `npx @rucken/cli config ./src --mode=prod
npx @rucken/cli config --mode=dev`,
            },
        ],
        outputs: [
            {
                url: 'https://github.com/rucken/cli/blob/generators-outputs/generators/angular.json#L41',
            },
        ],
        sources: [
            {
                url: 'https://github.com/rucken/cli/blob/develop/src/commands/config.ts',
            },
        ],
        packages: [
            {
                url: 'https://www.npmjs.com/package/@rucken/cli#rucken-config-folder',
            },
        ],
    }),
    new ModuleModel({
        title: 'Rucken Cli: Make list of typescript files',
        name: 'rucken-make-ts-list',
        tags: ['angular', 'nx', 'nestjs', 'tools'],
        description: `Make index.ts with list of ts files recursive from source folder`,
        samples: [
            {
                title: 'Run example',
                code: `npx @rucken/cli make-ts-list ./src`,
            },
        ],
        outputs: [
            {
                url: 'https://github.com/rucken/cli/blob/generators-outputs/generators/libs/custom-org/custom-lib/src/index.ts',
            },
        ],
        sources: [
            {
                url: 'https://github.com/rucken/cli/blob/develop/src/commands/make-ts-list.ts',
            },
        ],
        packages: [
            {
                url: 'https://www.npmjs.com/package/@rucken/cli#rucken-make-ts-list-folder',
            },
        ],
    }),
    new ModuleModel({
        title: 'Rucken Cli: Translate',
        name: 'rucken-translate',
        tags: ['angular', 'nx', 'nestjs', 'tools'],
        description: `Extract translate from source and make ts class from it`,
        samples: [
            {
                title: 'Run example',
                code: `npx @rucken/cli translate ./src`,
            },
        ],
        outputs: [
            {
                url: 'https://github.com/rucken/cli/tree/generators-outputs/generators/libs/custom-org/custom-lib/src/i18n',
            },
        ],
        sources: [
            {
                url: 'https://github.com/rucken/cli/blob/develop/src/commands/translate.ts',
            },
        ],
        packages: [
            {
                url: 'https://www.npmjs.com/package/@rucken/cli#rucken-translate-folder',
            },
        ],
    }),
    new ModuleModel({
        title: 'Rucken Cli: Version updater',
        name: 'rucken-version-updater',
        tags: ['angular', 'nx', 'nestjs', 'tools'],
        description: `Libraries dependencies and package.json versions updater from root package.json`,
        samples: [
            {
                title: 'Run example',
                code: `npx @rucken/cli version-updater ./src`,
            },
        ],
        outputs: [
            {
                url: 'https://github.com/rucken/cli/blob/generators-outputs/generators/libs/custom-org/custom-lib/package.json',
            },
        ],
        sources: [
            {
                url: 'https://github.com/rucken/cli/blob/develop/src/commands/version-updater.ts',
            },
        ],
        packages: [
            {
                url: 'https://www.npmjs.com/package/@rucken/cli#rucken-version-updater-folder',
            },
        ],
    }),
    new ModuleModel({
        title: 'Rucken Cli: Prepare',
        name: 'rucken-prepare',
        tags: ['angular', 'nx', 'nestjs', 'tools'],
        description: `Translate + make-ts-list + version-update + config`,
        samples: [
            {
                title: 'Run example',
                code: `npx @rucken/cli prepare ./src
npx @rucken/cli prepare --mode=dev`,
            },
        ],
        sources: [
            {
                url: 'https://github.com/rucken/cli/blob/develop/src/commands/prepare.ts',
            },
        ],
        packages: [
            {
                url: 'https://www.npmjs.com/package/@rucken/cli#rucken-prepare-folder',
            },
        ],
    }),
];
