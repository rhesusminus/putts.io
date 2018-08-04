# putts.io development server

Just a development server to putts.io. And change for me to try out Node.js, express, etc. Also trying out some new functional programming libraries.

Just few libraries I use in this project:

- [Objection.js](https://vincit.github.io/objection.js/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com)
- [Knex.js](https://knexjs.org/)
- [Folktale](https://folktale.origamitower.com/)

## development

I use docker-compose to bring up development db and db management tool. So You need to be able run docker in your machine.

`docker-compose up` should build and run postgres and adminer images.
`knex migrate:make migration_name` to create new migration file

## todo

- [ ] Add tests
- [ ] Add routes for results
