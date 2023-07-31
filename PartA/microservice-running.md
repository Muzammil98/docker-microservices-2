## Start up

Start the rabbitMQ service `docker run -p 5672:5672 -p 15672:15672 rabbitmq:3-management-alpine`

Start microservices `./docker-start.sh`

![Hitting Billing API from Postman](https://file.notion.so/f/s/8ce6b2ef-fe89-44a5-bc3f-a841281e6246/Untitled.png?id=d829e325-2e8c-4194-9603-aa517bd54944&table=block&spaceId=758854b2-5be4-4aee-955f-3f5f787b7b0f&expirationTimestamp=1690934400000&signature=JdRR6fPl6hrRT80j3W3_hkqQfu5h6QenlvF7soky1xA&downloadName=Untitled.png)

![Response from Billing Service, Data Service, Webhook Service Respectively](https://file.notion.so/f/s/fd92ae2e-d0f2-4773-9aa4-edcd0d94b98d/Untitled.png?id=98e398e3-e09a-4616-9fb4-366d6f6c556e&table=block&spaceId=758854b2-5be4-4aee-955f-3f5f787b7b0f&expirationTimestamp=1690934400000&signature=HJUl4oYuZ-ehYMCWzbcbZPpd6LRMXB4A4I-POtukMAw&downloadName=Untitled.png)
