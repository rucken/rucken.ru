export interface IConfig {
    env: {
        name: string;
        port: number;
        protocol: 'http' | 'https';
    };
    project: {
        title: string;
        path: string;
        package: any;
    };
    mailer: {
        transport: string;
        users: {
            [key: string]: {
                name: string;
                email: string;
            };
        };
    };
}
export declare const config: IConfig;
export declare function getRootPath(): "../../" | "../";
export declare function resolveRootFile(fileName: string): string;
export declare function loadRootJson<T = any>(fileName: string): T;
