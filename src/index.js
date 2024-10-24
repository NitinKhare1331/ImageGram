import express from "express";
import connectDB from "./config/dbConfig.js";
import apiRouter from './routers/apiRouter.js';
import { isAuthenticated } from "./middlewares/authMiddleware.js";
import { options } from "./util/swaggerOptions.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from 'swagger-ui-express';

const PORT = 5000;

const app = express();

app.use(express.json()); //middleware to parse json data(serializer, deserializer)
app.use(express.text()); //deserialization of text, json, urlencoded
app.use(express.urlencoded({ extended: true })); //app.use is global mddleware

const swaggerDocs = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api', apiRouter);

app.get('/ping', isAuthenticated, (req, res) => {
    // const name = req.params.name; //req params -> { name:'value', id:2 }
    console.log(req.query);
    console.log(req.body);
    console.log(req.user);
    
    return res.json({message: "pong"});
});

app.listen( PORT, () => {
    console.log(`Server is running on ${PORT}`);
    connectDB();
})