#!/bin/bash
export PROJECT_NAME='rucken-site'
export HOST='localhost'
export HOST_TYPE='prod'

export DEBUG='true'
export TITLE='Rucken'
export MAILER_ADMIN_EMAIL='admin@site15.ru'
export MAILER_ADMIN_NAME='Endy Kaufman'
export MAILER_ROBOT_EMAIL='robot@rucken.ru'
export MAILER_ROBOT_NAME='Robot Support'

# standard-version: export DOCKER_BACKEND_IMAGE='localhost:32000/rucken-site/backend:$VERSION'
export DOCKER_BACKEND_IMAGE='localhost:32000/rucken-site/backend:0.0.1-alpha.1'

export LETSENCRYPT_EMAIL='rucken@site15.ru'
export PROJECT_DOMAIN='rucken.ru'
export PROJECT_BACKEND_INGRESS_REWRITE_TARGET='/$1'
export PROJECT_BACKEND_INGRESS_PATH='/?(.*)'