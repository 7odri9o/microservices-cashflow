#!/bin/bash

echo "Microservices CashFlow"

# docker network create -d bridge microservices-cashflow --subnet 172.21.0.0/16
docker network ls | microservices-cashflow > /dev/null || docker network create --driver bridge microservices-cashflow --subnet 172.21.0.0/16

cd infra
./start.sh
cd ..

cd backend
./start.sh