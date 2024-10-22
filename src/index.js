import express from "express";
import connectDB from "./config/dbConfig.js";
import apiRouter from './routers/apiRouter.js';

const PORT = 5000;

const app = express();

app.use(express.json()); //middleware to parse json data(serializer, deserializer)
app.use(express.text()); //deserialization of text, json, urlencoded
app.use(express.urlencoded({ extended: true })); //app.use is global mddleware

app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
    // const name = req.params.name; //req params -> { name:'value', id:2 }
    console.log(req.query);
    console.log(req.body);
    return res.json({message: "pong"});
});

app.listen( PORT, () => {
    console.log(`Server is running on ${PORT}`);
    connectDB();
})