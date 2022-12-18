// mongodb.js

import { MongoClient } from 'mongodb'

//console.log(process.env.DB_USERNAME);
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster.azwpfd2.mongodb.net/test`
//const uri = process.env.MONGODB_URI
console.log(uri);
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

let client
let clientPromise


if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise