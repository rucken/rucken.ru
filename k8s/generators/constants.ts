export const enum HostType {
    Prod = `prod`,
    Local = `local`,
}
export const HOST_TYPE: HostType = process.env.HOST_TYPE as HostType;
export const PROJECT_NAME = process.env.PROJECT_NAME;
export const DOCKER_BACKEND_IMAGE = process.env.DOCKER_BACKEND_IMAGE;
export const LETSENCRYPT_EMAIL = process.env.LETSENCRYPT_EMAIL;
export const PROJECT_DOMAIN = process.env.PROJECT_DOMAIN;
export const PROJECT_BACKEND_INGRESS_PATH = process.env.PROJECT_BACKEND_INGRESS_PATH;
export const PROJECT_BACKEND_INGRESS_REWRITE_TARGET = process.env.PROJECT_BACKEND_INGRESS_REWRITE_TARGET;

export const MAILER_TRANSPORT = process.env.MAILER_TRANSPORT;
export const MAILER_ROBOT_NAME = process.env.MAILER_ROBOT_NAME;
export const MAILER_ROBOT_EMAIL = process.env.MAILER_ROBOT_EMAIL;
export const TITLE = process.env.TITLE;
export const MAILER_ADMIN_EMAIL = process.env.MAILER_ADMIN_EMAIL;
export const MAILER_ADMIN_NAME = process.env.MAILER_ADMIN_NAME;
