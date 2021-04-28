import { HOST_TYPE, PROJECT_BACKEND_INGRESS_PATH, PROJECT_BACKEND_INGRESS_REWRITE_TARGET, PROJECT_DOMAIN, PROJECT_NAME } from '../../constants';

export const backendIngressYaml = {
    apiVersion: `networking.k8s.io/v1`,
    kind: `Ingress`,
    metadata: {
        namespace: `${PROJECT_NAME}-${HOST_TYPE}`,
        name: `${PROJECT_NAME}-backend-ingress`,
        annotations: {
            [`kubernetes.io/ingress.class`]: `public`,
            [`cert-manager.io/cluster-issuer`]: `letsencrypt-${HOST_TYPE}`,
            [`nginx.ingress.kubernetes.io/proxy-read-timeout`]: `1800`,
            [`nginx.ingress.kubernetes.io/proxy-send-timeout`]: `1800`,
            ...(PROJECT_BACKEND_INGRESS_REWRITE_TARGET ? { [`nginx.ingress.kubernetes.io/rewrite-target`]: PROJECT_BACKEND_INGRESS_REWRITE_TARGET } : {}),
            [`nginx.ingress.kubernetes.io/secure-backends`]: `true`,
            [`nginx.ingress.kubernetes.io/ssl-redirect`]: `true`,
        },
    },
    spec: {
        tls: [
            {
                hosts: [PROJECT_DOMAIN],
                secretName: `echo-tls`,
            },
        ],
        rules: [
            {
                host: PROJECT_DOMAIN,
                http: {
                    paths: [
                        {
                            path: PROJECT_BACKEND_INGRESS_PATH,
                            pathType: 'ImplementationSpecific',
                            backend: {
                                service: { name: `${PROJECT_NAME}-backend-service`, port: { number: 5000 } },
                            },
                        },
                    ],
                },
            },
        ],
    },
};
