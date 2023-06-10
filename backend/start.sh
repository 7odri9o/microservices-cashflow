#!/bin/bash

echo "Starting backend..."

cd auth

docker-compose up -d
cd ..