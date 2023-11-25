# MERN CRUD Server

This project is a simple Node.js server application that performs CRUD (Create, Read, Update, Delete) operations on a MongoDB database. It is Dockerized for easy deployment and scalability.

## Overview

The project aims to demonstrate a basic setup for building a server that handles CRUD operations using a MongoDB database. It is designed to be containerized using Docker, providing portability and consistency across different environments.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Docker

## Project Structure

```plaintext
mern-crud-server/
|-- server/
|   |-- src/
|   |   |-- index.js
|   |   |-- routes/
|   |   |   |-- phoneRoutes.js
|   |   |-- models/
|   |   |   |-- phoneModel.js
|   |-- Dockerfile
|-- .dockerignore
|-- .gitignore
|-- .env
|-- rest.http
|-- other-folders-or-files/
```
# MERN CRUD Server

## Setup
1. Clone the repository: `git clone https://github.com/your-username/mern-crud-server.git`
2. Navigate to the server folder: `cd mern-crud-server/server`
3. Install dependencies: `npm install`
4. Set up environment variables in the `.env` file.

## Running the Application
To run the application locally:

```bash
cd mern-crud-server/server
npm start
```
## Docker
To containerize and run the application using Docker:

1. **Build the Docker image:**

    ```bash
    docker build -t mern-crud-server .
    ```

2. **Run the Docker container:**

    ```bash
    docker run -p 5000:5000 mern-crud-server
    ```

## API Documentation
The server exposes the following API endpoints:

- **POST /phones:** Create a new phone model
- **GET /phones:** Read all phone models
- **GET /phones/:id:** Read a specific phone model by ID
- **PUT /phones/:id:** Update a phone model by ID
- **DELETE /phones/:id:** Delete a phone model by ID

|-- ...
