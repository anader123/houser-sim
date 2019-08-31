require('dotenv').config(); 
const express = require('express');
const massive = require('massive'); 
const cors = require('cors')

// Controller File
const ctrl = require('./controller'); 

// .ENV
const {
    SERVER_PORT, 
    CONNECTION_STRING
} = process.env; 

const app = express();

// TLM 
app.use(express.json()); 
app.use(cors());

// DB Connection 
massive(CONNECTION_STRING).then(db => {
    app.set('db', db); 
    console.log('Database Connected'); 
}); 

// Endpoints
app.get('/api/houses', ctrl.getHouses);
app.post('/api/house', ctrl.createHouse)
app.delete('/api/houses/:id', ctrl.deleteHouse)

// Server Listening 
app.listen(SERVER_PORT, () => console.log(`Server is running on port ${SERVER_PORT}`)); 