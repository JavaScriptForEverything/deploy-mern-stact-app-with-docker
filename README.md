# Full Featured MERN-Stack app deploy with Docker

###### Directory Structure

```
├── docker-compose.yml
├── backend
├── frontend
└── README.md

```

###### backend & frontend

	- See inside that directory for more detail


###### Commands

	. $ docker-compose build  	: To build image from '/docker-compose.yml'
	. $ docker-compose up -d 	: Run docker containers in detatch mode
	. $ docker-compose down 	: Stop containers + remove from process + remove docker network too


###### docker-compose.yml

```
version: "3"
volumes:
  data: 				    (1)	: create volume before use: (2)

services:
  database: 				    (3) :
    image: mongo:4.0-xenial 			: ubuntu server with mongodb installed
    ports:
      - 27017:27017 				: bind database container's port with host's port
    volumes:
      - data:/data/db 			    (2)	: make sure volume 'data' created first on (1)

  backend:
    build: ./backend
    ports:
      - 5000:5000
    environment: 				: override Dockerfile ENV
      DB_LOCAL_URL: mongodb://database/mern (4)	: `database` is the hostname of 'MongoDB' container
    depends_on: 			    (5) : Wait for `database:27017 === localhost:27017`
      - database

  frontend:
    build: ./frontend
    ports:
      - 80:80
    depends_on: 			    (6) : Wait for `backend` container.
      - backend
```
