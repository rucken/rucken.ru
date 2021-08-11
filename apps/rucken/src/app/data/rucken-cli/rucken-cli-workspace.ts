import { ModuleModel } from '../../models/module.model';

export const RUCKEN_CLI_WORKSPACE = new ModuleModel({
    title: 'Rucken Cli: Workspace',
    name: 'rucken-generator-workspace',
    tags: ['angular', 'nx', 'generator'],
    description: `Workspace generator, based on the Rucken template`,
    samples: [
        {
            title: 'Run example',
            code: `npx @rucken/cli workspace custom-workspace --author=EndyKaufman --email=admin@site15.ru`,
        },
        {
            title: 'Install dependencies',
            code: `cd custom-workspace
npm i`,
        },
    ],
    images: [
        {
            description: 'Create workspace',
            src: 'assets/rucken-cli/generators/rucken-cli-workspace-create.png',
        },
        {
            description: 'Install dependencies',
            src: 'assets/rucken-cli/generators/rucken-cli-workspace-install-dependencies.png',
        },
    ],
    outputs: [
        {
            url: 'https://github.com/rucken/cli/tree/generators-outputs/generators',
        },
    ],
    sources: [
        {
            url: 'https://github.com/rucken/cli/blob/develop/src/commands/generator-workspace.ts',
        },
    ],
    packages: [
        {
            url: 'https://www.npmjs.com/package/@rucken/cli#rucken-generator-workspace-name',
        },
    ],
});
