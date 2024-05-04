import express, { ErrorRequestHandler } from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import "reflect-metadata";
import cors from 'cors'
import { routerMain } from './routes';
import { ResponseToClient } from './interfaces/interfaces';

import morgan from 'morgan';

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(morgan('dev'));
const origins = [process.env.CLIENT_DOMAIN]

app.use(cors({
  origin: origins[0],
  credentials: true //!Esto es muy importante para las cookies y headers
}));

app.use("/", routerMain)


const errorManager: ErrorRequestHandler = (err, _req, res, _next) => { // eslint-disable-line no-unused-vars
  console.log("Hubo un error...");

  const status = err.status || 500;
  const message = err.message;
  console.log(err);

  const response: ResponseToClient = {
    status,
    msg: message,
    data: null,
    error: true
  }
  return res.status(status).send(response);
}
app.use(errorManager);


export default app 