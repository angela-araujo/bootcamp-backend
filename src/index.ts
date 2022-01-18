import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import serveless from 'serverless-http';
import { apiRouter } from './routes/api.routes';
import { extRouter } from './routes/external.routes';

dotenv.config();

const app = express();
const allowOrigins = ['http://bootcamp-frontend.s3-website-sa-east-1.amazonaws.com', 'http://localhost:3000', ];
const options: cors.CorsOptions = { origin: allowOrigins };

app.use(express.json());
app.use(cors(options));
app.use(apiRouter);
app.use(extRouter);

export const ENV_VARS = {
    mongoURI: process.env.MONGO_URI,
    token_secret: process.env.TOKEN_SECRET
}

mongoose.connect(ENV_VARS.mongoURI as string);


export const handler = serveless(app, { callbackWaitsForEmptyEventLoop: false });