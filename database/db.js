// db.js
import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017/tu_base_de_datos'; // Reemplaza con tu conexión MongoDB
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let database;

async function connectDB() {
  if (client && client.isConnected()) {
    return database;
  }

  client = new MongoClient(uri, options);

  if (!client.isConnected()) {
    await client.connect();
  }

  database = client.db();

  return database;
}

export default connectDB;
