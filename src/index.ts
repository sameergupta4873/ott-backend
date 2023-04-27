import express, { Request, Response } from 'express'
import cors from 'cors';
import jwt from 'jsonwebtoken';
import connectToDb from './config/db';
import { protect } from './middleware/authMiddleware';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({ path: ".env" })

connectToDb();

const app = express();

app.use(express.json());
app.use(cors({}));

app.use(function (req, res, next) {
  req.header('Access-Control-Allow-Origin');
  res.header('Content-Type', 'application/json;charset=UTF-8')
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

const port = process.env.PORT || 5000;

app.get('/', (_req: Request, res: Response) => {
  return res.send('Express Typescript on Vercel')
})

app.get('/ping', (_req: Request, res: Response) => {
  return res.send('pong 🏓')
})

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`)
})