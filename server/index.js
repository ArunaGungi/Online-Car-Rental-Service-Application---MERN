import express  from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { DBConnection } from './database.js';
import registerRouter from './routes/register.js';
import carsRouter from './routes/cars.js';
import loginRouter from './routes/login.js';

dotenv.config();
const port = process.env.PORT;
const app=express();

DBConnection();
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/crs/api/v1',registerRouter);
app.use('/crs/api/v1',carsRouter);
app.use('/crs/api/v1', loginRouter);

app.listen(port, () => console.log(`connection to mongodb has been established and server is running on port ${port}`));

