import { Service } from 'kubernetes-types/core/v1';
import { HOST_TYPE, PROJECT_NAME } from '../../constants';

export const backendServiceYaml = {
    kind: `Service`,
    apiVersion: `v1`,
    metadata: {
        namespace: `${PROJECT_NAME}-${HOST_TYPE}`,
        name: `${PROJECT_NAME}-backend-service`,
    },
    spec: {
        selector: {
            pod: `${PROJECT_NAME}-backend-container`,
        },
        ports: [
            {
                protocol: `TCP`,
                port: 5000,
                targetPort: 5000,
            },
        ],
        type: `ClusterIP`,
    },
} as Service;
