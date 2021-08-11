#!/bin/sh
echo Show backend docker logs
var1=$(docker logs rucken-site-backend-service)
if grep -q "Listening at" <<<"$var1"; then
  echo "ok"
else 
  echo $var1
  exit 1
fi

echo Test backend docker
var1=$(docker run --network container:rucken-site-backend-service appropriate/curl -s --retry 40 --retry-connrefused http://localhost:5000/home)
if grep -q "<title>Cross-platform fullstack core libraries for create Angular,
NestJS and Ionic applications with samples working on NX workspace - Rucken</title" <<<"$var1"; then
  echo "ok"
else 
  echo $var1
  exit 1
fi