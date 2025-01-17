require('dotenv').config(); // Load environment variables
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI; // Load the connection string from .env
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let db;

async function connectToDatabase() {
    try {
        if (!db) {
            await client.connect(); // Establish a connection
            console.log('Connected to MongoDB!');
            db = client.db(); // Default database from the URI
        }
        return db;
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        throw error;
    }
};

function getDb() {
    return db;
};

module.exports = { connectToDatabase, getDb };