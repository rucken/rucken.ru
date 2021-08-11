ls ./tmp -l --block-size=MB

VERSION="$(cat VERSION.txt)"

docker rmi $(docker images -f "dangling=true" -q)

docker load < ./tmp/$PROJECT_NAME-backend-$HOST_TYPE.tar.gz
ID="$(docker images | grep $PROJECT_NAME'/backend' | head -n 1 | awk '{print $3}')"
docker tag "$ID" localhost:32000/$PROJECT_NAME/backend:$VERSION
docker rmi $PROJECT_NAME/backend:local
docker push localhost:32000/$PROJECT_NAME/backend:$VERSION