ls ./tmp -l --block-size=MB
rm -rf ./tmp/$PROJECT_NAME-backend-$HOST_TYPE.tar
gzip --decompress ./tmp/$PROJECT_NAME-backend-$HOST_TYPE.tar.gz
/snap/bin/microk8s ctr image rm docker.io/$PROJECT_NAME/backend:$HOST_TYPE
/snap/bin/microk8s ctr image import ./tmp/$PROJECT_NAME-backend-$HOST_TYPE.tar