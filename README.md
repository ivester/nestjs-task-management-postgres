## Setup Postgres DB for local development

```bash
$ docker run --name postgres-nest -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres
```

Use Beekeeper Studio or similar to connect to the DB and create a new DB called `task-management`


## Running NestJS app

```bash
$ npm ci
```

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
