## Start up

Start the rabbitMQ service `docker run -p 5672:5672 -p 15672:15672 rabbitmq:3-management-alpine`

Start microservices `./docker-start.sh`

**Hitting Billing API from Postman**
<img width="865" alt="image" src="https://github.com/Muzammil98/docker-microservices-2/assets/33463845/8d9d9839-c87c-4281-8018-c4ad0499e678">

**Response from Billing Service, Data Service, Webhook Service Respectively**
<img width="836" alt="image-1" src="https://github.com/Muzammil98/docker-microservices-2/assets/33463845/8f2cdaf1-da3b-4b6a-b8c1-f637987d3009">
