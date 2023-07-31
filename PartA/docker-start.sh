#!/bin/bash

echo "Removing old lib files..."

rm -rf ./billing-service/lib
rm -rf ./data-service/lib
rm -rf ./shipping-service/lib
rm -rf ./users-service/lib
rm -rf ./webhook-service/lib

# Copy the contents of the local lib directory to the microservices directory
echo "Copying new files..."

cp -r lib ./billing-service
cp -r lib ./data-service
cp -r lib ./shipping-service
cp -r lib ./users-service
cp -r lib ./webhook-service

echo "Removing old docker compose containers..."

docker-compose down

echo "Starting new docker compose..."

docker-compose up