import express from 'express';
import adminRoutes from './routes/adminRoutes.js';
import liseregRoutes from './routes/liseregRoutes.js';
import './db/connection.js';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import connection from './db/connection.js';
import cookieParser from "cookie-parser";
import multer from 'multer';
import Logger from './utils/logger.js';
dotenv.config();

const app = express();

//middlewares
//now setting up limit of http request body and urlencoded data
app.use(bodyParser.json({limit:'30mb', extended : true}));
app.use(bodyParser.urlencoded({limit:'30mb', extended : true}));

///fetching username and password from environmental file .env
const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;
const PORT = process.env.PORT;

connection(username,password); 
// we must use express takes correct json body or check express request body is json or not
app.use(express.json());
//initialize cookie-parser
app.use(cookieParser());
//initialize cors
app.use(cors({ origin:true, credentials:true }));
app.use('/public/', express.static('public')); //its working here we are giving proxy path as http://localhost:5000/public/imagename.jpg if first parameter '/public/' will be removed then we can directly access image as http://localhost:5000/imagename.jpg
app.use(express.static('data/uploads'));
//setting up default enpoint for api routes which is
app.use('/api/admin',adminRoutes);
app.use('/api/lisereg',liseregRoutes);
///customized error handler
app.use((err,req,res,next) => {
    const errorStatus = err.status || 500 ;
    const errorMessage = err.message || "somthing went wrong";
    Logger.error({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack});
    res.status(errorStatus).send({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    });
})
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`); 
})