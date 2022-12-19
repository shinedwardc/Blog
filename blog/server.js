const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
//const jsonParser = bodyParser.json();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

const dotenv = require("dotenv").config();

const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 5000;

const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster.azwpfd2.mongodb.net/test`

const client = new MongoClient(connectionString);

const blog_client = client.db('Blog');

const posts = blog_client.collection('Posts');
const contacts = blog_client.collection('Contacts');


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
    const list = posts.find({})
    .toArray((err,result) =>{
        if (err){
            res.status(400).send("Error")
        }
        else{
            res.json(result);
        }
    })
})

app.post('/contact', (req,res) => {
    //console.log(req);
    console.log(req.body);
    console.log(req.body.text);
    contacts.insertOne(req.body);
})