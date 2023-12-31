#!/bin/bash

echo "Starting backend..."

cd auth
docker-compose up -d
cd ..

cd cashin
docker-compose up -d
cd ..

cd cashout
docker-compose up -d
cd ..

cd wallet
docker-compose up -d
cd ..

cd balance
docker-compose up -d
cd ..