const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv").config();

const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 5000;

const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster.azwpfd2.mongodb.net/test`

const client = new MongoClient(connectionString);

const documents = client.db('Blog').collection('Posts');


client
    .connect()
    .then(() => app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    }))
    .catch(console.dir);



app.get('/', (req,res) => {
    res.send('Hello');
})

app.get('/posts', (req,res) => {
    const list = documents.find({})
    .toArray((err,result) =>{
        if (err){
            res.status(400).send("Error")
        }
        else{
            res.json(result);
        }
    })
})