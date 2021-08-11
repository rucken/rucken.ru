import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { dirname } from 'path';
import { stringify } from 'yaml';
import { HOST_TYPE } from './constants';
import { projectNamespaceYaml } from './project/0.namespace.yaml';
import { projectConfigmapYaml } from './project/1.configmap.yaml';
import { projectIssuerYaml } from './project/2.issuer.yaml';
import { backendDeploymentYaml } from './project/backend/0.backend-deployment.yaml';
import { backendServiceYaml } from './project/backend/1.backend-service.yaml';
import { backendIngressYaml } from './project/backend/2.backend-ingress.yaml';

const PROJECTS_CONFIG = {
    [`./k8s/${HOST_TYPE}/0.namespace.yaml`]: projectNamespaceYaml,
    [`./k8s/${HOST_TYPE}/1.configmap.yaml`]: projectConfigmapYaml,
    [`./k8s/${HOST_TYPE}/3.backend-deployment.yaml`]: backendDeploymentYaml,
    [`./k8s/${HOST_TYPE}/5.backend-service.yaml`]: backendServiceYaml,
    [`./k8s/${HOST_TYPE}/6.issuer.yaml`]: projectIssuerYaml,
    [`./k8s/${HOST_TYPE}/7.backend-ingress.yaml`]: backendIngressYaml,
};

Object.keys(PROJECTS_CONFIG).map((file) => {
    if (!existsSync(dirname(file))) {
        mkdirSync(dirname(file), { recursive: true });
    }
    writeFileSync(file, stringify(PROJECTS_CONFIG[file]));
});
