import express from "express";
import connectDB from "./config/dbConfig.js";

const PORT = 3000; //port.number

const app = express(); //creates express app server instance

app.get('/', (req, res) => {
    return res.send('Home');
});

app.get('/ping', (req, res) => {
    return res.json({ message: 'pong' });
});

// app.get('/hello', (req, res) => {
//     return res.json({ message: 'Hello World' });
// });

// app.post('/hello', (req, res) => {
//     return res.json({message: 'POST: Hello world!'});
// });

// app.put('/hello', (req, res) => {
//     return res.json({message: 'PUT: Hello world!'});
// });

// app.delete('/hello', (req, res) => {
//     return res.json({message: 'DELETE: Hello world!'});
// });

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    connectDB();
});