import { ConfigMap } from 'kubernetes-types/core/v1';
import { HOST_TYPE, MAILER_ADMIN_EMAIL, MAILER_ADMIN_NAME, MAILER_ROBOT_EMAIL, MAILER_ROBOT_NAME, MAILER_TRANSPORT, PROJECT_NAME, TITLE } from '../constants';

export const projectConfigmapYaml = {
    apiVersion: `v1`,
    kind: `ConfigMap`,
    metadata: {
        namespace: `${PROJECT_NAME}-${HOST_TYPE}`,
        name: `${PROJECT_NAME}-config`,
    },
    data: {
        MAILER_TRANSPORT,
        MAILER_ROBOT_NAME,
        MAILER_ROBOT_EMAIL,
        TITLE,
        MAILER_ADMIN_EMAIL,
        MAILER_ADMIN_NAME,
    },
} as ConfigMap;
