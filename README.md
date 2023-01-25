# CS3219-AY22-23-Project-Skeleton

## Option 1: Run the web application using docker only
## You can try the web application by using docker and without cloning this repo

1. Copy and paste the snippet below into a file called docker-compose.yml
```
version: '3.1'

services:
  frontend:
    image: cwq2326/pp-frontend
    ports:
      - "3000:3000"
  user-service:
    ports:
      - "8080:8080"
    restart: always
    image: cwq2326/pp-user-service
    links:
      - mongo
  question-service:
    image: cwq2326/pp-question-service
    ports:
      - "8090:8090"
    restart: always
    links:
      - mongo
  matching-service:
    image: cwq2326/pp-matching-service
    ports:
      - "5003:5003"
    restart: always
    links:
      - mongo
  collaboration-service:
    image: cwq2326/pp-collaboration-service
    ports:
      - "5001:5001"
    restart: always
  chat-service:
    image: cwq2326/pp-chat-service
    ports:
      - "5005:5005"
    restart: always
  mongo:
    image: mongo
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example
    restart: always
    ports:
      - 27017:27017
```
2. Run the command `docker-compose up`
3. Once all 7 containers are running, go to `localhost:3000` to access the frontend

## Option 2: Running the source code directly
## Installing dependencies

```bash
# from project root
npm run installAll
```

## Running all services and frontend

```bash
# from project root
npm run dev
```

## Running all services in Docker

```bash
# from project root
docker-compose up --build
```

## User and Question Service
1. Rename `.env.sample` file to `.env`.
2. Create a Cloud DB URL using Mongo Atlas.
3. Enter the DB URL created as `DB_CLOUD_URI` in `.env` file.
4. Install npm packages using `npm i`.
5. Run User Service using `npm run dev`.

## Collaboration, Chat and Matching Service
1. Copy `.env.sample` and rename it to `.env`
2. Install packages with yarn, `yarn`
3. Start services with `yarn dev`

## Frontend
1. Install npm packages using `npm i`.
2. Run Frontend using `npm start`.
