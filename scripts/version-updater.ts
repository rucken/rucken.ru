import { existsSync, mkdirSync, readFileSync, unlinkSync, writeFileSync } from 'fs';
import { dirname, resolve } from 'path';

const packageJsonFileName = 'package.json';
const angularJsonFileName = 'angular.json';
const angularJsonFilePath = resolve(__dirname, '..', angularJsonFileName);
const angularJson = JSON.parse(readFileSync(angularJsonFilePath).toString());
const packageJsonFilePath = resolve(__dirname, '..', packageJsonFileName);
const ciPackageJsonFilePath = resolve(__dirname, '..', `ci-${packageJsonFileName}`);
const rootPackageJsonData: any = JSON.parse(readFileSync(packageJsonFilePath).toString());

Object.keys(angularJson.projects).forEach((projectName) => {
    processLibrary(angularJson.projects[projectName].root);
});
// tslint:disable-next-line: no-dynamic-delete
delete rootPackageJsonData.version;
writeFileSync(
    ciPackageJsonFilePath,
    JSON.stringify({ dependencies: rootPackageJsonData.dependencies, devDependencies: rootPackageJsonData.devDependencies }, null, 4)
);

function processLibrary(path: string) {
    const libPackageJsonFilePath = resolve(__dirname, '..', path, packageJsonFileName);

    let packageJsonData: any = {};

    if (existsSync(libPackageJsonFilePath)) {
        packageJsonData = JSON.parse(readFileSync(libPackageJsonFilePath).toString());
    }
    packageJsonData.version = rootPackageJsonData.version;
    if (packageJsonData.dependencies) {
        Object.keys(rootPackageJsonData.dependencies).forEach((key: string) => {
            if (packageJsonData.dependencies[key]) {
                packageJsonData.dependencies[key] = rootPackageJsonData.dependencies[key];
            }
        });
    }
    if (packageJsonData.devDependencies) {
        Object.keys(rootPackageJsonData.devDependencies).forEach((key: string) => {
            if (packageJsonData.devDependencies[key]) {
                packageJsonData.devDependencies[key] = rootPackageJsonData.devDependencies[key];
            }
        });
    }
    if (rootPackageJsonData.dependencies && packageJsonData.dependencies) {
        Object.keys(packageJsonData.dependencies).forEach((key: string) => {
            if (!rootPackageJsonData.dependencies[key]) {
                // tslint:disable-next-line: no-dynamic-delete
                delete packageJsonData.dependencies[key];
            }
        });
    }
    if (rootPackageJsonData.devDependencies && packageJsonData.devDependencies) {
        Object.keys(packageJsonData.devDependencies).forEach((key: string) => {
            if (!rootPackageJsonData.devDependencies[key]) {
                // tslint:disable-next-line: no-dynamic-delete
                delete packageJsonData.devDependencies[key];
            }
        });
    }
    if (!existsSync(dirname(libPackageJsonFilePath))) {
        mkdirSync(dirname(libPackageJsonFilePath), { recursive: true });
    }
    writeFileSync(libPackageJsonFilePath, JSON.stringify(packageJsonData, null, 4));
}
