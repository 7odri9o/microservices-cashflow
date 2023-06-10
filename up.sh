#!/bin/bash

echo "Microservices CashFlow"

docker network create -d bridge microservices-cashflow --subnet 172.21.0.0/16

cd infra
./start.sh