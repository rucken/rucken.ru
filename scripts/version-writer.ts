import * as cheerio from 'cheerio';
import { mkdirSync } from 'fs';
import { existsSync } from 'fs';
import { readFileSync, writeFileSync } from 'fs';
import { dirname, resolve } from 'path';

const appsFrontendSrcIndexPath = resolve(__dirname, '..', 'apps', 'rucken', 'src', 'index.html');
const versionTxtPath = resolve(__dirname, '..', 'VERSION.txt');
const envProdFilePath = resolve(__dirname, '..', 'env', 'prod.env.sh');

const versionTxtContent = readFileSync(versionTxtPath).toString();
const envProdFileLines = readFileSync(envProdFilePath).toString().split('\n');

const MARKER = 'standard-version:';

let appsFrontendSrcIndexContent = readFileSync(appsFrontendSrcIndexPath).toString();

for (let i = 0; i < envProdFileLines.length; i++) {
    const line = envProdFileLines[i];
    if (line.includes(MARKER)) {
        envProdFileLines[i + 1] = line.split(MARKER)[1].trim().replace('$VERSION', versionTxtContent);
    }
}

const $ = cheerio.load(appsFrontendSrcIndexContent);
if ($('head > meta').length > 0) {
    if ($('head > meta[name=version]').length === 0) {
        $('head > meta').last().after(`\n        <meta name="version" content="${versionTxtContent}" />`);
    } else {
        $(`head > meta[name=version]`).attr('content', versionTxtContent);
    }
    appsFrontendSrcIndexContent = $.html();
}

if (!existsSync(dirname(envProdFilePath))) {
    mkdirSync(dirname(envProdFilePath), { recursive: true });
}
if (!existsSync(dirname(appsFrontendSrcIndexPath))) {
    mkdirSync(dirname(appsFrontendSrcIndexPath), { recursive: true });
}
writeFileSync(envProdFilePath, envProdFileLines.join('\n'));
writeFileSync(appsFrontendSrcIndexPath, appsFrontendSrcIndexContent);
