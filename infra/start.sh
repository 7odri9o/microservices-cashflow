#!/bin/bash

echo "Start infra..."

cd postgres

cd auth-db
docker-compose up -d
cd ..
