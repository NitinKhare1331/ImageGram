import express from "express";
import connectDB from "./config/dbConfig.js";
import { createPost } from "./controllers/postController.js";
import { s3uploader } from "./config/multerConfig.js";

const PORT = 5000;

const app = express();

app.use(express.json()); //middleware to parse json data(serializer, deserializer)
app.use(express.text()); //deserialization of text, json, urlencoded
app.use(express.urlencoded({ extended: true })); //app.use is global mddleware


app.get('/ping', (req, res) => {
    // const name = req.params.name; //req params -> { name:'value', id:2 }
    console.log(req.query);
    console.log(req.body);
    return res.json({message: "pong"});
});

app.post('/posts', s3uploader.single('image'), createPost); //routing layer

app.listen( PORT, () => {
    console.log(`Server is running on ${PORT}`);
    connectDB();
})