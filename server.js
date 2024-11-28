import express from 'express';
import dotenv from 'dotenv';
import ConnectDB from './dbConfig.js'
dotenv.config();

const app = express();
ConnectDB();
app.use(express.json());

const port =8000

app.listen(port, ()=>console.log('Server is running!'));