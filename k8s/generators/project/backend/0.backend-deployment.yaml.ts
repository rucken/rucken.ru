import { Deployment } from 'kubernetes-types/apps/v1';
import { DOCKER_BACKEND_IMAGE, HostType, HOST_TYPE, PROJECT_NAME } from '../../constants';

export const backendDeploymentYaml = {
    apiVersion: `apps/v1`,
    kind: `Deployment`,
    metadata: {
        namespace: `${PROJECT_NAME}-${HOST_TYPE}`,
        name: `${PROJECT_NAME}-backend`,
        labels: {
            app: `${PROJECT_NAME}-backend`,
        },
    },
    spec: {
        replicas: 1,
        selector: {
            matchLabels: {
                pod: `${PROJECT_NAME}-backend-container`,
            },
        },
        template: {
            metadata: {
                namespace: `${PROJECT_NAME}-${HOST_TYPE}`,
                labels: {
                    pod: `${PROJECT_NAME}-backend-container`,
                },
            },
            spec: {
                containers: [
                    {
                        name: `${PROJECT_NAME}-backend`,
                        image: DOCKER_BACKEND_IMAGE,
                        imagePullPolicy: HOST_TYPE === HostType.Prod ? `Always` : `Never`,
                        ports: [
                            {
                                containerPort: 5000,
                            },
                        ],

                        envFrom: [
                            {
                                configMapRef: {
                                    name: `${PROJECT_NAME}-config`,
                                },
                            },
                        ],
                        resources: {
                            requests: {
                                memory: `180Mi`,
                                cpu: `500m`,
                            },
                            limits: {
                                memory: `350Mi`,
                                cpu: `700m`,
                            },
                        },
                    },
                ],
            },
        },
    },
} as Deployment;
