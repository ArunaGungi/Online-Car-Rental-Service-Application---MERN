import bodyParser from "body-parser";
import dotenv from 'dotenv';
import express from 'express';
import mongoose from "mongoose";

dotenv.config();

const db_url = process.env.URL;

const app = express();
app.use(bodyParser.json({limit:"20mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"20mb",extended:true}))

export const DBConnection = async () => {
    await mongoose.connect(db_url, {useNewURLParser:true, 
        useUnifiedTopology:true,
        writeConcern: { w: 'majority', j: true, wtimeout: 1000}})
        .then(
            () => console.log("Database connected successfully")
        ).catch(
            (error) => console.log(error)
        )
}

