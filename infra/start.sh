#!/bin/bash

echo "Start infra..."

cd postgres

cd auth-db
docker-compose up -d
cd ..

cd cashin-db
docker-compose up -d
cd ..

cd cashout-db
docker-compose up -d
cd ..

cd wallet-db
docker-compose up -d
cd ..

cd ..

cd redis

cd cache-db
docker-compose up -d
cd ..

cd ..
