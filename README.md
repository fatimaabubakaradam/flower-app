


#  Full-Stack Flower Ordering App
Welcome to the Full-Stack Flower Ordering App! This project is a modern, feature-rich flower e-commerce platform that allows users to browse, order, and manage flowers seamlessly. Built using Node.js, Express, MongoDB, and React, this app provides both customer-friendly shopping and an admin dashboard for managing inventory.


## Table of Contents

- [Project Overview](#Project-Overview)

  - [Features](#Features)

  - [Prerequisites](#Prerequisites)

  - [Installation](#Installation)

  - [Project Structure](#Project-Structure)

  - [Implementation Details](#Implementation-Details)

  - [Server Configuration](#Server-Configuration)

  - [API Endpoints](#API-Endpoints)

  - [Notes](#Notes)

  - [License](#license)

  - [Author(s)](#authors)

## Project Overview

This full-stack project features an Express.js backend connected to a MongoDB Atlas database and a React frontend. It enables users to manage a flower collection with full CRUD functionality, including adding, viewing, updating, and deleting flowers. The backend is modularized into models, routes, and controllers for scalability and maintainability, while the frontend provides an intuitive interface for seamless interaction. The application also supports image handling for flower uploads.

## Features

- **Environment Variable Management:** Sensitive information such as PORT_NUMBER and MONGODB_URI is stored securely in a .env file.
- **Database Integration:** MongoDB Atlas is used to store and manage the flower data.
- **Image Uploads:** Multer is used for handling image uploads
- **RESTfu API:** Routes are created for getting, adding, and deleting flower records.
- **CORS Support:** Cross-Origin Resource Sharing (CORS) middleware is integrated.
 - **Structured Codebase:** Organized into models, routes, and controllers.

## Prerequisites

- **Node.js (v16 or higher):**
- **MongoDB Atlas account:**
- **Postman :**
 - **React :**
  

## Setup and Installation

 follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
cd <admin>
cd <backend>
   
2. **Install Dependencies:**

   npm install
   
3. **Set up MongoDB Atlas:**

   Create a MongoDB Atlas account and set up a cluster.
  Obtain the connection string from MongoDB Atlas and store it in the .env file as MONGODB_URI.

4. **Set up Environment Variables:**
   MONGODB_URI=<your-mongodb-connection-string>
   PORT_NUMBER=3000
   
 **The server will be running on http://localhost:3000.**

  **Project Structure**
/flower-admin
│
├── /admin
│   ├── flower.js     
    ├── addflower.js     
│
├── /backend
│   ├── server.js           
│
├── /routes
│   ├── flowerRoutes.js          # Defines the routes for flower-related operations
│
├── /uploads                     # Folder to store uploaded flower images
│
├── .env                         # Stores sensitive environment variables
├── app.js                       # Main server file
├── package.json                 # Project dependencies and scripts
└── README.md                    # Project documentation

  **Project implement**

- **Mongoose Models:** A flower schema is defined using Mongoose to structure the data in MongoDB.
- **Controllers:** Logic for handling flower CRUD operations is implemented in the controller, which interacts with the models..
- **Routes:** Express routes are defined for the CRUD operations, and API calls are handled here.
- **Multer Middleware:** For handling image uploads and storing them in the uploads/ folder.

   **Server Configuration**
  The server is configured to run on the port specified in the .env file or defaults to port 5000 if not set. MongoDB Atlas is used for database management, with connection details stored securely in environment variables.

  

-   **Notes**
- This application serves as the backend for a full-stack flower ordering system. It utilizes Multer for image handling, allowing users to upload flower images, which are stored locally in the uploads folder. Additionally, CORS middleware is implemented to enable seamless API access from different origins, ensuring smooth interaction between the frontend and backend.

   **API ENDPOINT**
-  http://localhost:3000
 
     
## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Author(s)
If you have any questions or feedback, feel free to contact:

**Name:** Fatima Abubakar 

**Email:** fatimammcy@gmail.com 

**GitHub:**  flower-app Repository
feature-1


**website:** https://flower-app-4-admin.onrender.com

**website backend:** https://flower-app-3.onrender.com 

**watch my loom video** https://www.loom.com/share/a5e039bd84ef4db98d0281c75157bfee







