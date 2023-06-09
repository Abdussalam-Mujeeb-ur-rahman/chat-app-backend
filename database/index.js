const mongoose = require('mongoose');

require('dotenv').config();

const connectToDb = () => {
    mongoose.connect(process.env.MONGO_URL)
    mongoose.connection.on('connected', () => {
        console.log('connected to mongodb!');
    });
    mongoose.connection.on('error', (error) => {
        console.log('An error occured while connecting to mongodb ' + error);
    });
}

module.exports = {connectToDb};