import dotenv from 'dotenv';
dotenv.config()
import express from 'express';

import {connectDB} from './src/db/connect.js';
import {errorHandlerMiddleware} from './src/middlewares/error_handler.js';
import {notFoundError} from './src/middlewares/not_found.js';

import productRouter from './src/routes/product.route.js';


const app = express();


app.get('/', (req, res)=> {
    res.send('Welcome');
})


app.use('/api/products', productRouter);

app.use(notFoundError);
app.use(errorHandlerMiddleware);



app.listen(process.env.PORT, ()=> {
    connectDB()
    console.log(`Server is running on port:${process.env.PORT}`);
})
