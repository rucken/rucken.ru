#!/bin/bash
export PROJECT_NAME='rucken-site'
export HOST='localhost'
export HOST_TYPE='local'

export DEBUG='true'
export TITLE='Rucken'
export MAILER_ADMIN_EMAIL='admin@site15.ru'
export MAILER_ADMIN_NAME='Endy Kaufman'
export MAILER_ROBOT_EMAIL='robot@rucken.ru'
export MAILER_ROBOT_NAME='Robot Support'

export DOCKER_BACKEND_IMAGE='rucken-site/backend:local'

export LETSENCRYPT_EMAIL='admin@site15.ru'
export PROJECT_DOMAIN='localhost'
export PROJECT_BACKEND_INGRESS_REWRITE_TARGET='/$2'
export PROJECT_BACKEND_INGRESS_PATH='/rucken-site(/|$)(.*)'