const express = require('express');
const cors = require('cors');
const socket = require('socket.io');

//app
const app = express();

//routes
const userRoutes = require('./routes/userRoutes');
const messageRouter = require('./routes/messagesRoutes');

//middlewares
app.use(express.json());
app.use(cors({ origin: true, credentials: true })); // Updated line to accept all origins with credentials

//routes
app.get('/', (req, res) => {
    return res.json({
        status: true,
        message: 'welcome to my chat app'
    })
})

// imported routes
app.use('/api/auth', userRoutes);
app.use('/api/messages', messageRouter);

// 404 route
app.use('*', (req, res) => {
    return res.status(404).json({
        message: 'route not found!',
        status: false,
    })
})

// error middleware
app.use((err, req, res, next) => {
    console.log({
        message: 'error middleware called!',
        error: err,
    });
    res.json({
        status: false,
        message: 'please check your internet connection or check if you have not made an invalid request!'
    });

    next();
})

module.exports = app;
