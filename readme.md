# Project:  Chat API

This project is a Chat API built using Express.js, MongoDB, and Socket.IO following the Model-View-Controller (MVC) pattern. The API provides a real-time chat functionality and stores chat messages in a MongoDB database.

## Project Structure

The project is structured based on the MVC pattern. Here's a brief overview of the main directories and their purpose:

- `/models`: This directory contains the schema definitions for our MongoDB models.
- `/controllers`: This directory contains the logic of the application. Each controller handles requests, interacts with the models, and sends back a response.
- `/routes`: This directory contains the route definitions for the API. Each route associates an HTTP verb and URL with a controller action.

## Getting Started

Here are instructions to get the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js installed on your machine
- MongoDB installed on your machine
- A basic understanding of Express.js, MongoDB, and Socket.IO

### Installing

Clone the repository to your local machine:
```
git clone https://github.com/Abdussalam-Mujeeb-ur-rahman/chat-app-backend.git
cd chat-app-backend
```

Install necessary dependencies: `npm install`

## Running the application

To start the application, run: `npm start`

The application runs on http://localhost:3030 by default.

## API Endpoints

The API exposes the following endpoints:

    POST /api/auth/register: Register a new user
      - request body: `{"username": "salam", "email": "salam@gmail.com", "password": "11111"}`
    POST /api/auth/login: Authenticate a user
        - request body: `{"username": "salam", "password": "11111"}`
    POST /api/auth/setAvatar/:id: Set Avatar for user
        - request body: `{"image": "avatar_name"}`
    GET /api/auth/allusers/:id: Get all users
    POST /api/messages/addmsg - add message
     - request body: `{"from": "salam", "to": "joseph", "message": "hello!"}`
    POST /api/messages/getmsg - get messages
        - request body: `{"from": "salam", "to": "joseph"}`


## Built with

- Express.js - Fast, unopinionated, minimalist web framework for Node.js
- MongoDB - A source-available cross-platform document-oriented database program
- Socket.IO - Enables real-time, bidirectional and event-based communication between the browser and the server
- MVC - Model-View-Controller pattern for organizing code in an application

## Developer's contact
- [twitter](https://twitter.com/allahisrabb?t=kz-S255eO8vb3GCg-PAZ2Q&s=09)
- [portfolio](https://cv1.mujeeburrahman.repl.co)
