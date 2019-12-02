Quick and simple dashboard in NestJS for the back-end and Handlebars (template HTML) for the Front-end.

To configure it:
  - Install postgresql
  - create a localserver with a database named: "dashboard_db"
  - configure it with : postgres:123456
  
To run it:
  the app listen on port 8080 (http://localhost:8080)
  - local: 
    - npm run start
  - with Docker: 
    - start docker service
    - stop postgresql service (if it's already start on your machine)
    - sudo docker-compose up
