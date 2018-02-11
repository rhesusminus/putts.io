require('dotenv').config();
require('babel-polyfill');
import { Model } from 'objection';
import Knex from 'knex';
import express from 'express';
import winston from 'winston';
import bodyParser from 'body-parser';
import promiseRouter from 'express-promise-router';
import cors from 'cors';
import knexConfig from '../knexfile';
import registerApi from './api';

const knex = Knex(knexConfig[process.env.NODE_ENV]);
Model.knex(knex);

const port = process.env.PORT || 3090;
const router = promiseRouter();
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(router);

registerApi(router);

// Error handling. The `ValidationError` instances thrown by objection.js have a `statusCode`
// property that is sent as the status code of the response.
//
// NOTE: This is not a good error handler, this is the simplest one. See the error handing
//       recipe for a better handler: http://vincit.github.io/objection.js/#error-handling
app.use((err, req, res, next) => {
  if (err) {
    res.status(err.statusCode || err.status || 500).send(err.data || err.message || {});
  } else {
    next();
  }
});

app.listen(port);
console.log(`putts.io-dev-server started at port: ${port}`);
